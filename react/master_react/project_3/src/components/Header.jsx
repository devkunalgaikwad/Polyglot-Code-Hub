import { Box, Button, HStack, Input, IconButton, useColorMode , useDisclosure, InputGroup, InputRightAddon, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {MdDarkMode , MdLightMode, MdSearch} from 'react-icons/md'
import {
  Drawer,
  InputAddon,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { server } from '..';
import CoinCard from './asset_components/CoinsCard';
import SearchCard from './asset_components/SearchCard';
import FetchError from '../components/asset_components/FetchError'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [coinInput,setCoinInput] = useState('');
  const [coinResult , setCoinResult] =useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  const handleSearch= async()=>{
    const fetchCoinType = async()=>{
      try{
        const {data} = await axios.get(`${server}/search?query=${coinInput}`)
        setCoinResult(data);
        console.log(data)
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    fetchCoinType();
  }

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
          <Button onClick={toggleColorMode} borderRadius={'full'} marginLeft={'10px'} >
          {colorMode === 'light' ? <MdDarkMode/> : <MdLightMode/>}
        </Button>
        </Box>
        <Button borderRadius={'full'} onClick={onOpen}>
          <MdSearch/>
        </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size={'xl'}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <InputGroup>
            <Input placeholder='Search for coin atleast three letters' w={'80%'} m={'4'} onChange={(event)=>setCoinInput(event.target.value)} value={coinInput} />
            <InputRightElement m={'4'}>
              <Button onClick={handleSearch}>Ok</Button>
            </InputRightElement>
          </InputGroup>
          {coinResult.coins && coinResult.coins.length > 0 ? (
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
              {coinResult.coins.map((i) => (
                <SearchCard name={i.name} key={i.id} img={i.large}/>
              ))}
            </HStack>
            ) : (
            <FetchError message={'Unable to find coin'} typeError={'Search error'}/>
          )}
        </DrawerContent>
      </Drawer>
      </HStack>
    </>
  )
}

export default Header;