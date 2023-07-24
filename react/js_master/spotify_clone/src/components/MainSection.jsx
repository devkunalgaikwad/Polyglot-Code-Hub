import { Box, useColorMode ,Button, Heading } from '@chakra-ui/react'
import React from 'react'
import Header from './pageComponents/Header'

const MainSection = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box display={'flex'} justifyContent={'space-between'} h={'300vh'} bg={'blackAlpha.900'} padding={'20px'}>
      <Heading>
        Discover
      </Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default MainSection