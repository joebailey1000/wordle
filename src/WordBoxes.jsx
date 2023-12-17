export const WordBoxes = ({currWord,currRow,guesses,solution}) => {
    function displayLetters(column,row){
        if (row<currRow) return guesses[row][column]
        return row===currRow?currWord[column]:''
    }
    function getBoxStyle(row,column){
        const letter=guesses[row]?guesses[row][column]:undefined
        if (row<currRow) {
            if (letter===solution[column]) return 'word-box-green'
            const processingSolution = solution.split('').filter((l,i)=>l!==guesses[row][i]).join('')
            const processingGuess = guesses[row].split('').filter((l,i)=>l!==solution[i]).join('')
            return solution.indexOf(letter)>=0
              && processingSolution.match(new RegExp(letter,'g'))>=processingGuess.slice(0,column+1).match(new RegExp(letter,'g'))?'word-box-yellow':'word-box-grey'
        }
        if (row===currRow) return currWord.length>column?'word-box-active':'word-box'
        return 'word-box'
    }
    return (
        <div>
            {[...Array(6)].map((row, rowIndex) => {
                return (
                    <div className="flex-div" key={rowIndex}>
                        {[...Array(5)].map((box, columnIndex) => {
                            return (
                                <div className={getBoxStyle(rowIndex,columnIndex)} id={`${rowIndex}${columnIndex}`} key={[rowIndex,columnIndex]}>
                                    <p className='letter-in-box' key={[rowIndex,columnIndex]}>{displayLetters(columnIndex,rowIndex)}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}