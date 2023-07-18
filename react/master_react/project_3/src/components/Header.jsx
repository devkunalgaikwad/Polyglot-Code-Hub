import { Box, Button, HStack, Input, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {MdDarkMode , MdLightMode} from 'react-icons/md'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack display={'flex'} p={'4'} justifyContent={'space-between'} shadow={'base'} bgColor={'blackAlpha.900'} w={'full'}>
        <Box justifyContent={'left'}>
          <Button m={'4px'} variant={'unstyled'} color={'white'}>
              <Link to='/'>Home</Link>
          </Button>
          <Button m={'4px'} variant={'unstyled'} color={'white'}>
              <Link to='/exchanges'>Exchange</Link>
          </Button>
          <Button m={'4px'} variant={'unstyled'} color={'white'}>
              <Link to='/coins'>Coins</Link>
          </Button>
        </Box>
        <Button onClick={toggleColorMode} borderRadius={'full'} >
          {colorMode === 'light' ? <MdDarkMode/> : <MdLightMode/>}
        </Button>
      </HStack>
    </>
  )
}

export default Header;