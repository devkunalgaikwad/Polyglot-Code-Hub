import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard'

const Excerises = (exercises,setExercises,bodyPart) => {
  console.log('hek=llo')
  console.log(exercises)
  const[currentPage, setCurrentPage] = useState([1]);
  const exercisesPerPage = 9;
  const indexOfLastExercises = currentPage* exercisesPerPage;
  const indexOfFirstExercises = indexOfLastExercises-exercisesPerPage
  // const currentExercises = exercises.slice(indexOfFirstExercises,indexOfLastExercises)
  const paginate =(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})
  }
  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt={'50px'} p={'20px'}>
        <Typography variant='h3' mb={'46px'}>
          Showing Results
        </Typography>
        <Stack direction={'row'} sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap={'wrap'} justifyContent={'center'}>
          {exercises.map((exercise,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
        </Stack>
        <Stack mt={"100px"} alignItems={'center'}>
            {exercises.length > 9 && (
              <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.exercises.length/exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>
            )}
        </Stack>
    </Box>
  )
}

export default Excerises;