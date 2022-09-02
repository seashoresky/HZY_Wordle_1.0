import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App'

function Navbar() {
    const {theme,toggleTheme} = useContext(ThemeContext)
    console.log('rerender')
    return (

    
        <div 
                className='switchPos'
                id={theme}
            >
                <div className='switch'>
                    <label className='labelforSwitch'>
                    {theme === 'light'?'light':'dark'}
                    </label>
                    <ReactSwitch 
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                </div>
                <div className='navlink' id={theme}>
                    <Link to='/'>Guide</Link>
                    <Link to='/game'>Game</Link>
                </div>
               
            </div>
    
    )
    
}

export default Navbar