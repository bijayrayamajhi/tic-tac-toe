import { useState } from "react";
import Square from "./Square.jsx" ;

const Board = () => {
    
    let [state, setState] = useState(Array(9).fill(null)) ;
    let[isXturn, setIsXturn] = useState(true);
    
    const handleClick = (index) => {
        let copyState = [...state];
        if(copyState[index] === null) {
         copyState[index] = isXturn ? "X" : "O" ;
         setState(copyState);
         setIsXturn(!isXturn) ;
        }
    }

    const checkWinner = () => {
        let winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    for(const logic of winnerLogic) {
        let [a, b, c] = logic;

       if(state[a] != null && state[a] === state[b] && state[a] === state[c]){
        return state[a];
       }
    };

    return null ;
  }

const isBoardFull = () => {
    return state.every((square) => square !== null) ;  // every returns true if none of the square is null
}

const isWinner = checkWinner() ;
const isDraw = isBoardFull() && !isWinner ;


const playAgain = () => {
    setState(Array(9).fill(null));
    setIsXturn(true) ;
}

  return (
    <div>
        {isWinner ? (
            <div style={{marginLeft: "400px"}}>
                Player {isWinner} won the game!
                <button onClick={playAgain} style={{display: "block"}}>Play Again</button>
                </div>
        ) : isDraw ? (
            <div style={{marginLeft: "400px"}}>
                Game is draw!
                <button onClick={playAgain} style={{display: "block"}}>Play Again</button>
                </div>
        ) : (
            <>
            <h4 style={{marginLeft: "350px"}}>Player {isXturn ? "X" : "O" } make your move</h4>
            <div className="board">
                <div className="board-row">
                    <Square value={state[0]} onClick={() => handleClick(0)} />
                    <Square value={state[1]} onClick={() => handleClick(1)} />
                    <Square value={state[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={state[3]} onClick={() => handleClick(3)} />
                    <Square value={state[4]} onClick={() => handleClick(4)} />
                    <Square value={state[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={state[6]} onClick={() => handleClick(6)} />
                    <Square value={state[7]} onClick={() => handleClick(7)} />
                    <Square value={state[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
        </>
        )}
        
    </div>
)
}

export default Board ;