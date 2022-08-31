import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import EndGame from './components/EndGame';
import { boardDefault, generateWords } from './Word';
import Tips from './components/Tips';
import GameOver from './GameOver';
import Confetti from 'react-confetti';

export const AppContext = createContext();
function App() {
  const [board,setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({
    attempt:0,
    letter:0
  })
  const [correctWord, setCorrectWord] = useState('')
  const [Wordset, setWordset] = useState(new Set())
  const [disabledWord, setDisabledWord] = useState([])
  const [gameOver, setGameOver] = useState({
    gameOver:false,
    gussed: false
  })

  let attemptPosition = currAttempt.attempt;
  let letterPosition = currAttempt.letter;

  useEffect(() => {
    generateWords()
      .then(words => {
        setWordset(words.WordSet)
        setCorrectWord(words.todaysWord)
      })
  },[])

  function onDelete() {
    if(letterPosition === 0) return;
      let newBoard = [...board];
      newBoard[attemptPosition][letterPosition - 1] =''
      setBoard(newBoard)
      setCurrAttempt({
        ...currAttempt,
        letter: letterPosition - 1
      })
  }
  function onEnter() {
    if(letterPosition !== 5) return;
    let currWord = ''
    for(let i = 0; i < 5; i++) {
      currWord += board[attemptPosition][i]
    }
    if(currWord === correctWord) {
      setGameOver({
        gameOver:true,
        gussed:true
      })
      setCurrAttempt({
        attempt: attemptPosition + 1,
        letter: 0
      })
      return;
    }
    if(attemptPosition === 4) {
      setGameOver({
        gameOver:true,
        gussed:false
      })
      return;
    }
    if(Wordset.has(currWord)) {
      setCurrAttempt({
        attempt: attemptPosition + 1,
        letter: 0
      })
    }  else {
      alert('小可爱，你确定这是个词儿吗？')
    }
  }

  function onInput(keyVal) {
    if(letterPosition === 5) return;
      let newBoard = [...board];
      newBoard[attemptPosition][letterPosition] = keyVal
      setBoard(newBoard)
      setCurrAttempt({
        ...currAttempt,
        letter: letterPosition + 1
      })
  }

  return (
    <div className="App">
      {gameOver.gussed && <Confetti />}
      <nav>
        <h1>HZY's Wordle 1.0</h1>
        <div className='title'>
          <p>⚡️Beta</p>
          <div className='lightSet'>
            <div className='light red'></div>
            <div className='light orange'></div>
            <div className='light green'></div>
          </div>
          
        </div>
      </nav>
      <AppContext.Provider value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onDelete,
        onEnter,
        onInput,
        correctWord,
        Wordset,
        disabledWord,
        setDisabledWord,
        gameOver,
        setGameOver
      }}>
        <Board />
       
        {
          gameOver.gameOver ? <GameOver /> :
          <div>
            <div className='gameopt'>
              <Tips/>
              <EndGame/>
            </div>
            <Keyboard />
          </div>  
        }
       { `answer : ${correctWord}`}
      </AppContext.Provider> 
    </div>
  );
}

export default App;
