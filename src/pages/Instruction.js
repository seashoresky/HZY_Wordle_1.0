import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import shuoming from '../static/shuoming.png'
import shuoming_dark from '../static/shuoming_dark.png'

function Instruction() {
  const {theme} = useContext(ThemeContext)
  
  return (
    <motion.div 
      id={theme} 
      className='Instruction'
      initial={{
        opacity:0,
      }}
      animate={{
        opacity:1,
      }}
      exit={{
        opacity:0, 
      }}
    >
      <div className='flexContainer'>
        <div className='bioaticontainer'>
          <div className='zhubiaoti'>
             Wordle 
          </div>
          <div className='lightSet' id='home'>
            <div className='light red'></div>
            <div className='light orange'></div>
            <div className='light green'></div>
          </div>
          <div className='third'>
            <div className='startbtn'>
              <Link to='/game'>Start</Link>
            </div>
          </div>

        </div> 
        <div className='shuoming'>
          {
            theme === 'light' ? 
              <img src={shuoming}/> :
              <img src={shuoming_dark}/> 
          }
          
        </div>
      </div> 
    </motion.div>
  )
}

export default Instruction