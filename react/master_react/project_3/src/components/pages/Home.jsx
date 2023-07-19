import { Box, Heading, Image, Table, Text, Th, Tr, TableContainer,TableCaption,Thead,Tbody,Td } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";
import axios from "axios";
import {BiLinkExternal} from 'react-icons/bi'
import { server } from "../..";

const Home = () => {
  const [trending,setTrending] = useState([]);
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(`${server}/search/trending`);
        setTrending(response.data); // Access the 'data' property from the response
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Coins Junction
      </Text>
      <Heading>Treading Coins</Heading>
      <TableContainer>
                    <Table variant={'simple'}>
                        <TableCaption>
                          Trending Coins
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th display={'flex'}justifyContent={'flex-end'}>Name</Th>
                                <Th>Symbol</Th>
                                <Th>ID & Coin ID</Th>
                                <Th>Market Cap Rank</Th>
                                <Th>Price</Th>
                                <Th>Score</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {trending.map((i) => (
                                <Tr key={i.id}>
                                    <Td display={'flex'} alignItems={'center'} justifyContent={'space-between'} >{i.name}</Td>
                                    <Td>{i.symbol} </Td>
                                    <Td>{i.id} </Td>
                                    <Td>{i.market_cap_rank} </Td>
                                    <Td>{i.price_btc} </Td>
                                    <Td>{i.score} </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
    </Box>
  );
};

export default Home;
