'use client'
import { CustomFilter, Hero, SearchBar,ShowMore, CarCard} from '@/components'

import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import { Spinner } from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {CgSearchLoading} from 'react-icons/cg'

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading,setLoading] = useState(false)
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(10)
  const getCars = async ()=>{
    setLoading(true)

    try{
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel:fuel || '',
        limit : limit || 10,
        model : model || '',
      });
      setAllCars(result)
    } catch(err){
      console.log(err)
    } finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    console.log(fuel,year,limit,manufacturer,model)
    getCars();
  },[fuel,year,limit,manufacturer,model])
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car of Your Dearms
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer= {setManufacturer} setModel={setModel}/>
          <div className='home__filter-container'>
            <CustomFilter title='fuel' setFilter={setFuel} options={fuels}/>
            <CustomFilter title='year' setFilter={setYear} options={yearsOfProduction}/>
          </div>
        </div>
        {allCars.length>0?(
          <section >
            <div className='home__cars-wrapper flex-center'>
            {
              allCars?.map((car)=>(
                <CarCard car={car}/>
              ))
            }
            </div>
            {loading&&(
              <div className='mt-16 w-full flex-center'>
                <Spinner />
              </div>
            )}
            <ShowMore pageNumber= {limit/10} isNext={limit > allCars.length} setLimit={setLimit}/>
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl'>Opps, no results</h2>
            <p >{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
