import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation'
import SideBar from './components/SideBar'
import MainSection from './components/MainSection'
import Player from './components/Player'
import './App.css'

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
        <div className="discover">
          <MainSection/>
        </div>
      </div>
      <div className='player'>
        <Player/>
      </div>
    </div>
  )
}

export default App