import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Coins from './components/pages/Coins'
import Exchanges from './components/pages/Exchanges'
import CoinsDetails from './components/pages/CoinsDetails'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/exchanges' element={<Exchanges/>}/>
          <Route path='/coin/:id' element={<CoinsDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App