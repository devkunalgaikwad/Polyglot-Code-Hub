import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../components/spotify_components/Navigation'
import Discover from '../components/spotify_components/pages/Discover'
import Footer from '../components/spotify_components/Footer'
import MusicPlayer from '../components/spotify_components/MusicPlayer'
import Playist from '../components/spotify_components/Playist'
import Podcast from '../components/spotify_components/pages/Podcast'
import Concerts from '../components/spotify_components/pages/Concerts'
import Episodes from '../components/spotify_components/pages/Episodes'

const Spotify = () => {
  return (
    <Box h={'100vh'} w={'100vw'} p={'10px'} style={{ gridTemplateColumns:'25vw auto', gridTemplateRows:'20vh auto 15vh', gridTemplateAreas: ` 'nav main' 'playist main' 'musicPlayer musicPlayer' ` ,backgroundColor:'#000'}} className='grid gap-2'>
        <div style={{gridArea:'nav', borderRadius:'10px', backgroundColor:'red'}}>
            <Navigation />
        </div>
        <div className = {'main'}style={{gridArea:'main',borderRadius:'10px', backgroundColor:'red', overflow:'hidden',overflowY:'scroll'}}>
            <Routes >
                <Route path='/' element={<Discover/>} />
                <Route path='/podcast' element={<Podcast/>} />
                <Route path='/concerts' element={<Concerts/>} />
                <Route path='/episodes' element={<Episodes/>} />
            </Routes>
            <Footer/>
        </div>
        <div style={{gridArea:'playist',borderRadius:'10px', backgroundColor:'red'}}>
            <Playist />
        </div>
        <div style={{gridArea:'musicPlayer',borderRadius:'10px', backgroundColor:'red'}}>
            <MusicPlayer />
        </div>
    </Box>
  )
}

export default Spotify