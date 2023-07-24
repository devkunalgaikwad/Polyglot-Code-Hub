import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'

import RigthArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = ()=>{
  const {scrollPrev} = useContext(VisibilityContext);
  return(
    <Typography onClick={()=>scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

const RightArrow = ()=>{
  const {scrollNext} = useContext(VisibilityContext);
  return(
    <Typography onClick={()=>scrollNext()} className='left-arrow'>
      <img src={RigthArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {
  console.log(data)
  return (
    <Box sx={{ overflowX: 'auto', maxWidth: '100%', display: 'flex' }}>
      {/* Pass the arrow components as props to the ScrollMenu */}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box key={item.id || item} m={'0 40px'}>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </ScrollMenu>
    </Box>

  )
}

export default HorizontalScrollBar