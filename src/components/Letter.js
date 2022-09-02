import React, { useContext, useEffect } from 'react'
import { AppContext } from '../pages/Home'


function Letter({attemptVal, letterPos}) {
  const {
    board,
    correctWord, 
    currAttempt,
    disabledWord,
    setDisabledWord
  } = useContext(AppContext)

  const letter = board[attemptVal][letterPos]  

  const correct = correctWord[letterPos] === letter
  const almost = !correct && correctWord.includes(letter)
  const wrong = !correct && !almost

  useEffect(() => {
    if(wrong) {
      setDisabledWord(prev => [...prev, letter])
    }
  },[currAttempt.attempt])

  const letterState = currAttempt.attempt > attemptVal &&
    (correct ? 'correct': almost? 'almost' : 'wrong')
  return (
    <div className={`letter ${letterState}`}>
        {letter}
    </div>
  )
}

export default Letter