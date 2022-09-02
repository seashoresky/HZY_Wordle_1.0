import React, { useState, createContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
export const ThemeContext = createContext()


function App() {
  const [theme, setTheme] = useState('dark')
  function toggleTheme() {
    setTheme(curr => (curr === 'light'?'dark':'light'))
  }

  return (
    <div>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Router>
          <Navbar/>
          <AnimatedRoutes/>
        </Router>
      </ThemeContext.Provider>
    </div>
  )
}

export default App