import React, { useContext } from 'react';
import { Box, Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/images/rightArrow.png'
import LeftArrowIcon from '../assets/images/leftArrow.png'

const RightArrow = () => {
const {scrollNext} = useContext(VisibilityContext);

return(
<Typography onClick ={()=> scrollNext()} className='right-arrow'>
    <img src = {RightArrowIcon} alt = 'right-arrow-icon' />
</Typography>
);
};

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);
    
    return(
    <Typography onClick ={()=> scrollPrev()} className='right-arrow'>
        <img src = {LeftArrowIcon} alt = 'left-arrow-icon' />
    </Typography>
    );
    };




const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item)=>(
                <Box 
                key = {item.id || item}
                itemId = {item.id || item}
                title = {item.id || item}
                m="0,40px" >
                    <BodyPart item ={item} bodyPart={bodyPart} setBodyPart ={setBodyPart} />
                </Box>
            ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar