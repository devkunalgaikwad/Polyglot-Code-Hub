import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure()

  return (
    <>
        <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Video Hub</DrawerHeader>
            <Stack alignItems={'flex-start'}>
              <Button  onClick={onClose}variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos'}>Video</Link>
              </Button>
              <Button  onClick={onClose}variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/video?category-free'}>Free video</Link>
              </Button>
              <Button  onClick={onClose}variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </Stack>
            <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'}  justifyContent={'space-evenly'}>
              <Button  onClick={onClose}colorScheme={'purple'}>
                <Link to={'/login'}>Log in</Link>
              </Button>
              <Button  onClick={onClose}colorScheme={'purple'} variant={'outline'}>
                <Link to={'/signup'}>Sign up</Link>
              </Button>
            </HStack>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

    </>
  );
};

export default Header;