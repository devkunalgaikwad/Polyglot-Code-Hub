import { Box, Button, HStack, Input, IconButton, useColorMode , useDisclosure, InputGroup, InputRightAddon, InputRightElement, Heading } from '@chakra-ui/react'
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
        setLoading(false)
      }catch(error){
        setLoading(false)
        setError(true)
      }
    }
    fetchCoinType();
  }

  return (
    <>
      <Box display={'flex'} alignContent={'center'} justifyContent={'space-between'} p={'10px'} bgColor={'blackAlpha.900'}>
        <Heading ml={'10px'}>CoinXplorer</Heading>
        <Box minW={'20vw'} display={'flex'} justifyContent={'space-between'}>
          <Button variant={'unstyled'} color={'white'}>
              <Link to='/'>Home</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
              <Link to='/exchanges'>Exchange</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
              <Link to='/coins'>Coins</Link>
          </Button>
        </Box>
        <Box minW={'9vw'} display={'flex'} justifyContent={'space-between'}>
          <Button onClick={toggleColorMode} borderRadius={'full'} m={'0 10px'} >
            Change to {colorMode === 'light' ? <MdDarkMode/>: <MdLightMode/>}
          </Button>
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
          <InputGroup maxW={'60%'} justifyContent={'center'} >
            <Input placeholder='Search for coin atleast three letters'm={'4'} onChange={(event)=>setCoinInput(event.target.value)} value={coinInput} />
            <InputRightElement m={'4'}>
              <Button onClick={handleSearch}>Ok</Button>
            </InputRightElement>
          </InputGroup>
          <DrawerCloseButton m={'10px'} />
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
        </Box>
      </Box>
    </>
  )
}

export default Header;

{/* <Box>
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
      </HStack>
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
      </Box>
    </> */}