import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchdata';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExcerises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('');
  const [bodyPart,setBodyParts]= useState([])
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setBodyParts(['all',...bodyPartsData])
      console.log(bodyPartsData)
    }
    fetchExercisesData();
  },[])
  const handleSearch=async()=>{
    if(search){
      const exerisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchExcerises = exerisesData.filter(
        (exercise)=> exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setExercise(searchExcerises)
    }
  }
  return (
    <Stack alignItems={'center'} justifyContent={'center'} mt={'37px'} p={'20px'}> 
      <Typography textAlign={'center'} fontWeight={'700'} sx={{fontSize:{lg:'44px',xs:'20px'}}}> 
        "Find Your Perfect Fit: <br/> Explore Exercise Excellence!"
      </Typography>
      <Box position={'relative'} mt={'20px'}  mb={'72px'}>
        <TextField value={search}  fontWeight={'700'} sx={{input:{borderRadius:'4px'},width:{lg:'700px',xs:'200px'},bgcolor:'#fff',borderRadius:'40px'}} onChange={(event)=>{setSearch(event.target.value.toLowerCase())}} placeholder='Search for Exercises' type='text'/>
        <Button className='search-btn' position='absolute' onClick={handleSearch} sx={{ml:'20px',height:'56px',width:{lg:'175px', xs:'80px'}}} variant='contained' color='error'>Search</Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollBar data={bodyPart} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExcerises