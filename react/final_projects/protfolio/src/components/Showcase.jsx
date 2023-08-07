import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Showcase = () => {
  return (
    <div className='w-full flex'>
      <h1>Project Showcase</h1>
    </div>
  )
}

export default SectionWrapper(Showcase)