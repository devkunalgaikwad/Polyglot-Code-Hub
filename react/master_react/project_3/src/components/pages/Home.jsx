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
        const {data} = await axios.get(`${server}/search/trending`);
        setTrending(data.coins);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchTrending();
  },[]);
  return (
    <>
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
    </Box>
    <Box>
    <Heading mt={'10px'} textAlign={'center'}>Treading Coins</Heading>
      <TableContainer m={'30px 10vw'}>
                    <Table variant={'simple'}>
                        <TableCaption>
                          Data is updated every 10 minutes
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th textAlign={'right'}>Name</Th>
                                <Th>Symbol</Th>
                                <Th>ID or Coin ID</Th>
                                <Th>Market Cap Rank</Th>
                                <Th>Price(in BTC)</Th>
                                <Th>Score</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {trending.map((i) => (
                                <Tr key={i.id}>
                                    <Td display={'flex'} alignItems={'center'} justifyContent={'space-between'} ><img src={i.item.small} alt="" />{i.item.name}</Td>
                                    <Td>{i.item.symbol} </Td>
                                    <Td>{i.item.id} </Td>
                                    <Td>{i.item.market_cap_rank} </Td>
                                    <Td>{i.item.price_btc} </Td>
                                    <Td>{i.item.score} </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
    </>
  );
};

export default Home;
