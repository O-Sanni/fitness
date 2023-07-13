import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import Banner from '../components/Banner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

return (
    <Box>
        <Banner />
        <SearchExercises setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} />
        <Exercises  setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home
