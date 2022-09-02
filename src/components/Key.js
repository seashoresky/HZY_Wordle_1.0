import React, { useContext } from 'react'
import { AppContext } from '../pages/Home'


function Key({keyVal, keyType, disabled}) {
  const {
    onDelete,
    onEnter,
    onInput,
    disabledWord
  } = useContext(AppContext)

  
  function handleKeyBoard() {
    if(keyType === 'Tuige') {
      onDelete()
    }
    if(keyType === 'normal') {
      onInput(keyVal.toLowerCase())
    }
    if(keyType === 'Enter') {
      onEnter()
    }
  }
  // console.log(`${keyVal}:${disabled}`)
  return (
    <div 
      className={`key ${disabled? 'disabled':''}`}
      onClick={handleKeyBoard}
    >
      {keyVal}
    </div>
  )
}

export default Key