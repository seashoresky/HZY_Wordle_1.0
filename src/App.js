import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWords } from './Word';
import Tips from './components/Tips';
import GameOver from './GameOver';
import Confetti from 'react-confetti';
import GameFail from './components/GameFail';
import ReactSwitch from 'react-switch';

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
  const [theme, setTheme] = useState('dark')
  
  let attemptPosition = currAttempt.attempt;
  let letterPosition = currAttempt.letter;

  useEffect(() => {
    generateWords()
      .then(words => {
        setWordset(words.wordSet)
        setCorrectWord(words.todaysWord)
      })
  },[])

  function toggleTheme() {
    setTheme(curr => (curr === 'light'?'dark':'light'))
  }

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
      setCurrAttempt({
        attempt: attemptPosition + 1,
        letter: 0
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
    <>
    <div className='switchPos' id={theme}>
        <div className='switch'>
           <label className='labelforSwitch'>
              {theme === 'light'?'light':'dark'}
            </label>
            <ReactSwitch 
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
          </div>
      </div>
    <div className="App" id={theme}>
      {gameOver.gussed && <Confetti />}
      
      
      <nav>
        
        <h1>HZY's Wordle </h1>
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
          (gameOver.gameOver && gameOver.gussed) ? <GameOver answer={correctWord}/> :
          (gameOver.gameOver && !gameOver.gussed) ? <GameFail answer={correctWord}/> :
          <div>
            <Tips/>
            <Keyboard />
          </div>  
        }
       {/* { `@HZY 觉得这个App还少个首页、暗黑模式还有个bug`} */}
      </AppContext.Provider> 
    </div>
    </>
  );
}

export default App;
