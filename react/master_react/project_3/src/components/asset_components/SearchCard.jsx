import React from 'react'
import {VStack,Text, Image, HStack} from '@chakra-ui/react'

const SearchCard = ({name,img}) => {
  return (
    <>
        <a target={'Blank'}>
            <HStack w={'52'} display={'flex'} justifyContent={'space-between'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.5s'} m={'4'} css={{'&:hover':{transform:'scale(1.1)'}}}>
              <Image src={img} w={'8'}/>
              <Text>{name}</Text>
            </HStack>
        </a>
    </>
  )
}

export default SearchCard