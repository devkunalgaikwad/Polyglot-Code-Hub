
function App() {
  return (
    <div className='main'>
      <SideBar/>
      <div>
        <Header/>
        <div>
          <Route path="/" element={<Discover />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/around-you" element={<AroundYou />} />
        </div>
        <Footer/>
      </div>
      <MusicPlayer/>
    </div>
  )
}

export default App
 
{/* <div className='container'>
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
</div> */}