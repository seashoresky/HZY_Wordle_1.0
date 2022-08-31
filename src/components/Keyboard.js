import React, { useContext, useEffect } from 'react'
import Key from './Key'
import IconComponent from './IconComponent'
import { AppContext } from '../App'

const keys1 = ['Q','W','E','R','T','Y','U','I','O','P']
const keys2 = ['A','S','D','F','G','H','J','K','L']
const keys3 = ['Z','X','C','V','B','N','M']


function Keyboard() {
  
  const {
    onDelete, 
    onEnter, 
    onInput,
    disabledWord
  } = useContext(AppContext)

  useEffect(() => {
    document.addEventListener('keydown', handleJianPan)
    return () => {
      document.removeEventListener('keydown', handleJianPan)
    }
  },[handleJianPan])

  function handleJianPan(event) {
    if(event.key === 'Enter') {
      onEnter()
    } else if(event.key === 'Backspace') {
      onDelete()
    } else {
      keys1.map(key => {
        if(key.toLowerCase() === event.key.toLowerCase()) {
          onInput(key.toLowerCase())
        }
      })
      keys2.map(key => {
        if(key.toLowerCase() === event.key.toLowerCase()) {
          onInput(key.toLowerCase())
        }
      })
      keys3.map(key => {
        if(key.toLowerCase() === event.key.toLowerCase()) {
          onInput(key.toLowerCase())
        }
      })
    }
  }
  return (
    <div 
      className='keyboard'
      onKeyDown={handleJianPan}
    >
      <div className='line'>
        {keys1.map(key => {
          return (
            <Key 
              keyVal={key} 
              keyType={'normal'}
              disabled={disabledWord.includes(key.toLowerCase())}
            />
          )
        })}
      </div>
      <div className='line'>
        {keys2.map(key => {
          return (
            <Key 
              keyVal={key} 
              keyType={'normal'} 
              disabled={disabledWord.includes(key.toLowerCase())}
            />
          )
        })}
        <Key 
          keyVal={
            'Del'
            // <IconComponent className='icon Tuige' icon='#icon-tuige'/> 
          }
          keyType={'Tuige'}
        />
      </div>
      <div className='line'>
        {keys3.map(key => {
          return (
            <Key 
              keyVal={key} 
              keyType={'normal'}
              disabled={disabledWord.includes(key.toLowerCase())}
            />
          )
        })}
        <Key 
          keyVal={
            '↵'
            // <IconComponent className='icon Enter' icon='#icon-icon-'/> 
          }
          keyType={'Enter'}
        />
      </div>
    </div>
    
  )
}

export default Keyboard