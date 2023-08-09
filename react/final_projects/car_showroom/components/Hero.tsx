'use client'

import React from 'react'
import Image from 'next/image'
import {Text} from '@chakra-ui/react'
import { CustomButton } from '.'

const Hero = () => {
  const handleScroll =()=>{

  }
  return (
    <div className='hero'>
        <div className='flex-1 pt-16 padding-x'>
            <Text className='hero__title mt-[20px]' >
                Find your prefect parking member
            </Text>
            <Text className='hero__subtitle'>
                Your next best travel friend can be foturner or swift
            </Text>
            <CustomButton btnType='button' title = 'Explore Cars' containerStyle ='bg-primary-blue text-white rounded-full mt-10' handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src={'/hero.png'} alt='hero' fill className='object-contain'/>
          </div>
          <div className='hero__image-overlay rotate-[14deg] '/>
        </div>
    </div>
  )
}

export default Hero