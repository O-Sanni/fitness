import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import Home from './pages/Home';
import ExerciseInfo from './pages/ExerciseInfo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css'





const App = () => {
  return (
    <Box width = "400px" sx={{width:{xl: '1488px'}}} m='auto' >
    <Navigation />
        <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/exercise/:id" element = {<ExerciseInfo />} />
    </Routes> 
    <Footer />
    </Box>
   
  )
}

export default App