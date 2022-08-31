import React, { useState, useContext } from 'react'
import { AppContext } from '../App'
import Restart from './Restart'

function GameFail() {
  const {correctWord} = useContext(AppContext)
  return (
    <div className='chonglai'>
        <div className='yihan'>呜呜太遗憾了，其实答案是 {correctWord} 啦</div>
        <Restart/>
    </div>
  )
}

export default GameFail