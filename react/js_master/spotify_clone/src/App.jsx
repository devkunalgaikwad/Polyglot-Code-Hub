import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation'
import SideBar from './components/SideBar'
import Player from './components/Player'
import './App.css'
import Footer from './components/pageComponents/Footer'
import Header from './components/pageComponents/Header'
import AroundYou from './components/mainComponents/AroundYou'
import Discover from './components/mainComponents/Discover'
import TopArtists from './components/mainComponents/TopArtists'
import TopCharts from './components/mainComponents/TopCharts'


const App = () => {
  return (
    <div className='container'>
      <div className='nav'>
        <Navigation/>
      </div>
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='mainSection'>
        <div className="mainContent">
        <Header/>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/around-you" element={<AroundYou />} />
        </Routes>
        <Footer/>
        </div>
      </div>
      <div className='player'>
        <Player/>
      </div>
    </div>
  )
}

export default App