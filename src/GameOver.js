import React from 'react'
import Restart from './components/Restart'

function GameOver({answer}) {
  return (
    <div className='gameover'>
      <h2>太强了!! 猜到了哟 😉</h2>
      <h3>答案就是 {answer} 呢</h3>
      <Restart/>
    </div>
  )
}

export default GameOver