export const Keyboard=({currWord,setCurrWord,setGuesses,setRow})=>{
    function buttonGenerator(str){
        return str
            .split('')
            .map(letter=>{
                return (
                    <button className='letter-button' key={letter} onClick={()=>{
                        if (currWord.length<5) setCurrWord(currWord+letter)
                    }}>{letter}</button>
                )
            })
    }
    
    return (
        <div id='keyboard'>
            <div className="flex-div">
                {buttonGenerator('QWERTYUIOP')}
            </div>
            <div className="flex-div">
                {buttonGenerator('ASDFGHJKL')}
            </div>
            <div className="flex-div">
                <button className='letter-button' id='enter' onClick={()=>{
                    if (currWord.length===5){
                        setGuesses((curr)=>[...curr,currWord])
                        setCurrWord('')
                        setRow(row=>row+1)
                    }
                }}>Enter</button>
                {buttonGenerator('ZXCVBNM')}
                <button className='letter-button' id='backspace' onClick={()=>{
                    setCurrWord(currWord.slice(0,currWord.length-1))
                }}>Backspace</button>
            </div>
        </div>
    )
}