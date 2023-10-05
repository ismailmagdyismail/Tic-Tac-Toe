import {useEffect, useState} from "react";
import Cell from "./Cell";
import {useCheckWinner} from "./useCheckWinner";
import toast from "react-hot-toast";
const DIMENSIONS = 3;
function createGrid(){
    return Array.from({ length: DIMENSIONS }, (i) =>
        Array.from({ length: DIMENSIONS }, () => {return {img:'',symbol:'-'}})
    );
}
function Board() {
    const [board, setBoard] = useState(createGrid());
    const [playerTurn,setPlayerTurn] = useState(1);
    const winner = useCheckWinner(board);
    function handleReset(){
        setBoard(createGrid());
        setPlayerTurn(1);
        toast.dismiss();
    }

    useEffect(() => {
        if(winner){
            toast.success(`Player ${playerTurn} Has won, Reset to start Again`);
        }
    }, [winner]);
    function setCell(row,col){
        if(board[row][col].symbol === '-' && !winner){
            const cell = {}
            if(playerTurn === 1){
                cell.img =  <img src="/cross.png"/>;
                cell.symbol = 'X';
            }else{
                cell.img =  <img src="/circle.png"/>;
                cell.symbol = 'O';
            }
            setPlayerTurn((turn)=>turn === 1 ? 2 : 1);
            setBoard(board.map((gridRow,i)=>gridRow.map((gridCol,j)=> i === row && col === j ? cell : board[i][j])));
        }
    }

    return (
        <>
            <h2>Player {playerTurn} Turn</h2>
            <div
                className="board"
                style={{ gridTemplateColumns:`repeat(${DIMENSIONS}, 1fr)` }}
            >
                {board.map((row, i) => row.map((cell,j) =>
                    <Cell
                        key={i+j}
                        setGridCell={()=>setCell(i,j)}
                        symbol={board[i][j].img}
                    />
                ))}
            </div>
            <button onClick={()=>handleReset()}>Reset</button>
        </>
    );
}

export default Board;
