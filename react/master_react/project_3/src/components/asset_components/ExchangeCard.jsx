import { Image, HStack, Heading, Text,Tbody, Tr, Td} from '@chakra-ui/react';
import React from 'react'

const ExchangeCard = ({name,img,rank,url,score,volume,country}) => {
  return (
    <>
        <a href={url} target={'Blank'}>
            {/* <HStack w={'80vw'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.5s'} m={'4'} css={{'&:hover':{transform:'scale(1.1)'}}}>
                <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={`Image`}/>
                <Heading size={'md'} noOfLines={1}>{rank}</Heading>
                <Text w={'20vw'} noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>{score}</Text>
            </HStack> */}
            <Tbody>
              {
                <Tr>
                  <Td>{name}{img}</Td>
                  <Td>{rank}</Td>
                  <Td>{score}</Td>
                  <Td>{volume}</Td>
                  <Td>{country}</Td>
                </Tr>
              }
            </Tbody>
        </a>
    </>
  )
}

export default ExchangeCard;