import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { generateWords } from '../Word'

function Restart() {
    
    const {
        setGameOver, 
        setCurrAttempt,
        setBoard,
        setDisabledWord,
        setWordset,
        setCorrectWord,
    } = useContext(AppContext)
    
    
        
    function restartGame() {
        setBoard([
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
            ]
        )
        setGameOver({
            gameOver:false,
            gussed:false
        })
        setCurrAttempt({
            attempt:0,
            letter:0
        })
        setDisabledWord([])

    }
    return (
        <div 
            className='zailaiyiju'
            onClick={restartGame}
        >
            再来一局
        </div>
    )
}

export default Restart