import {useEffect} from 'react';

import './App.css'
import SearchIcon from './search.svg'
// api key : 2766eecb
const API_URL = 'http://www.omdbapi.com?apikey=2766eecb';
const App =() =>{
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(()=>{
        searchMovies('Dangal');
    },[]);
    return (
        <div className='app'>
            <h1>Movies Land</h1>
            <div className='search'>
                <input placeholder='Search for movies' value='Superman' onChange={() =>{}}/>
                <img src={SearchIcon} alt ='Search' onClick={() =>{}}/>
            </div>
        </div>
    );
}

export default App;