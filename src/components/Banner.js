import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import BannerImage from "../assets/images/BannerImage.jpg"

const Banner = () => {
  return (
    <Box sx = {{mt:{lg:'212px', xs: '70px'}, ml:{sm: '50px'}}} 
    position= "relative" p="20px">
        <Typography color = "#FF2625"
        fontWeight="600" sx={{fontSize:{lg: '25px', xs: '15px'} }} mb="23px" mt = "30px" >
            “Physical fitness is the first<br /> requisite of happiness.”<br /> – Joseph Pilates
        </Typography>

        <Typography color = "#AB7855" lineHeight="35px"
         fontSize = "15px" >
            Check out the most effective exercises
        </Typography>

<Button variant="contained" color="success" href ="#exercise">
  Explore Exercises
</Button>
<Typography fontWeight= {600} color="BB3457" sx={{opacity:'0.1', display:{lg:'block', xs: 'none'}, fontSize: '200px'}}>
  EXERCISE
</Typography>
<img src ={BannerImage} alt= "banner" className ="banner-image"  />
    </Box>
    
  )
}

export default Banner