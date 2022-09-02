import React, { useState, useContext } from 'react'
import { AppContext } from '../pages/Home'


function Tips() {
  const {correctWord, gameOver, setGameOver} = useContext(AppContext)
  const [tishikai,setTishi] = useState(false)

  function tishi() {
    setTishi(true)
  }
  function buwan() {
    setGameOver({
      gameOver:true,
      gussed:false
    })
  }
  return (
    <div className='opt'>
      <div className='gameopt'>
        <div 
          className={!tishikai ?'restart huanci':'restart bugei'}
          onClick={tishi}
        >
          &nbsp;{!tishikai ? '给点提示':'不给提示了'}&nbsp;
        </div>
        <div 
          className='restart toukan'
          onClick={buwan}
        >
          &nbsp;偷看答案&nbsp;
        </div>
      </div>
      <div className={tishikai? `tishikai`:`tishiguan`}>
        这个单词的字母以 {correctWord[0]} 开头，以 {correctWord[4]} 结尾
      </div>
    </div>
    
  )
}

export default Tips