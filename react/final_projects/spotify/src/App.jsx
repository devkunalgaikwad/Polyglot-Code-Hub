import React, { useEffect, useState } from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import { reducerCases } from './utils/Constant'
import Spotify from './components/Spotify'
import { useStateProvider } from './utils/StateProvider'


function App() {
  const [{token},dispatch] =useStateProvider()
 useEffect(()=>{
  const hash = window.location.hash
  if (hash){
    const token = hash.substring(1).split("&")[0].split('=')[1]
    dispatch({type:reducerCases.SET_TOKEN,token})
  }
 },[token,dispatch])
  return (
    <div>
      {token?<Spotify/>:<Login/>}
    </div>
  )
}

export default App
