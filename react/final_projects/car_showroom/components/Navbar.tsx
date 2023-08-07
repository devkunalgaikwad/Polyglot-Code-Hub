'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {MdOutlineLightMode, MdDarkMode} from 'react-icons/md'
import {Button} from '@chakra-ui/react'
// import { CustomButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href={'/'} className='flex justify-center items-center'>
          <Image src={'logo.svg'} alt='Car Hub' width={118} height={18} className='object-contain'/>
        </Link>
        {/* <CustomButton title= {'Sign In'} btnType='button' containerStyle='text-primary-blue rounded-full bg-white min-w-[120px]'/> */}
        <Button onClick={toggleColorMode} className='rounded-full'>
          {colorMode === 'light' ? <MdDarkMode /> : <MdOutlineLightMode/>}
        </Button>
      </nav>
    </header>
  )
}

export default Navbar