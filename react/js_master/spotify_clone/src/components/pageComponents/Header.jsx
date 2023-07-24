import { useColorMode, Button } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
      
  return (
    <>
        <Button onClick={toggleColorMode} display={'flex'} justifyContent={'flex-end'}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    </>
  )
}

export default Header