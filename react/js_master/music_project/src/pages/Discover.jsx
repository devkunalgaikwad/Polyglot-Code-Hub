import React from 'react';
import { genres } from '../assets/constants'

const Discover = () => {
    console.log(genres)
  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>
            <select  value={''} className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                {genres.map((genres)=><option key={genres.value} value={genres.value2}>{genres.title}</option>)}
 8           </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8"></div>
    </div>
  )
}

export default Discover