import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExcerises from '../components/SearchExcerises'
import Excerises from '../components/Excerises'

const Home = () => {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises,setExercises]= useState([])
  
  return (
    <>
      <Box>
        <HeroBanner/>
        <SearchExcerises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Excerises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </>
  )
}

export default Home