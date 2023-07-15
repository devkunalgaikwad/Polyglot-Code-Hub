import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

function Home() {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={['1','16']}>
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} m={'auto'} borderBottom={'2px solid'}>Services</Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} h={['40','400']}></Image>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['0','16']} textalign={['justify','center']}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem similique quaerat cum totam in velit doloribus perspiciatis quod omnis nulla eveniet enim soluta ullam, laudantium quasi esse voluptatem perferendis culpa. Assumenda, eius nostrum, nihil temporibus facilis asperiores fugiat voluptatibus similique eum non soluta. Voluptate esse repudiandae quasi eligendi perferendis alias, numquam aspernatur harum commodi soluta totam quaerat? Nemo eius quidem harum repellendus aut vitae ullam enim possimus velit maiores, dolor delectus molestiae eos ipsum, reiciendis, voluptas assumenda! Iusto assumenda nostrum, quo saepe corporis a maxime placeat laudantium rem. Quas, nam ducimus ipsum non magni id, voluptates beatae facilis magnam ipsa iste vel asperiores laudantium. Consequuntur deleniti facere officiis rem itaque aperiam nulla similique error fugit minus? Debitis, obcaecati veniam! Deleniti nam dignissimos, quam eos quisquam voluptatem, voluptas a enim, eum sit iste? Modi nostrum enim, quis porro similique rem aspernatur saepe nisi. Maiores esse numquam aliquid mollitia eius saepe.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const headingOptions ={
    pos:'absoute',
    left:'50%',
    top:'50%',
    transfrom:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
}

const MyCarousel =() =>{
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}>
            <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headingOptions}>
                Future is Gaming
            </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Gaming on Console
            </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headingOptions}>
                Life is Gaming
            </Heading>
            </Box>
        </Carousel>
    )
}

export default Home;