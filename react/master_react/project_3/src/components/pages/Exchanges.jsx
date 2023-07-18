import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../../index'
import { Container, HStack} from '@chakra-ui/react';
import Loader from '../asset_components/Loader';
import ExchangeCard from '../asset_components/ExchangeCard';
import FetchError from '../asset_components/FetchError'

const Exchanges = () => {
const [exchanges,setExchanges] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(false);
    useEffect(() => {
        const fetchExchanges = async()=>{
            try {
                const {data} = await axios.get(`${server}/exchanges`)
                setExchanges(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
                console.log(error)
            };
        };
        fetchExchanges();
    }, []);

    if(error) return <FetchError message={'Error Occured while fetching data'}/>

  return (
    <>
        <Container maxW={'container.xl'}>
            {loading? <Loader/>:<>
                <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                    {exchanges.map((i)=>(
                        <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
                    ))}
                </HStack>
            </>}
        </Container>
    </>
  )
}

export default Exchanges;