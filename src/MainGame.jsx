import { WordBoxes } from './WordBoxes'
import { Keyboard } from './Keyboard'
import { useState, useEffect } from 'react'
import { wordList } from './assets/wordle-answers-alphabetical.json'

export const MainGame=()=>{
    const [currWord,setCurrWord]=useState('')
    const [currRow,setRow]=useState(0)
    const [guesses,setGuesses]=useState([])
    const [solution,setSolution]=useState('')

    useEffect(()=>{
      setSolution(wordList[Math.floor(Math.random()*wordList.length)].toUpperCase())
    },[])

    return (
        <div className='flexDiv'>
            <WordBoxes currWord={currWord} currRow={currRow} guesses={guesses} solution={solution}/>
            <Keyboard currWord={currWord} setCurrWord={setCurrWord} setGuesses={setGuesses} setRow={setRow}/>
        </div>
    )
}