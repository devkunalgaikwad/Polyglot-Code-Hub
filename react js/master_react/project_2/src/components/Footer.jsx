import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p ='16' color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size= 'md' textTransform={'uppercase'} textAlign={['center','left']}>
                    Follow us for to get updated
                </Heading>
                <HStack borderBottom={'2px solid white'}>
                    <Input placeholder='Enter your Email id' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='whiteAlpha.900'/>
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'8px'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Video Hub
                </Heading>
                <Text>All right reserved &copy;</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='whiteAplha'>
                    <a href="https://www.youtube.com/">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAplha'>
                    <a href="https://www.youtube.com/">Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAplha'>
                    <a href="https://www.facebook.com/">GitHub</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer