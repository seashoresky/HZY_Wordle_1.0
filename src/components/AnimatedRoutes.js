import React from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Instruction from '../pages/Instruction';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Instruction/>} />
            <Route path='/game' element={<Home/>} />
            <Route path='*' element={<h1>啊哦，你是不是网不太好……</h1>} />
        </Routes> 
    </AnimatePresence> 
  )
}

export default AnimatedRoutes