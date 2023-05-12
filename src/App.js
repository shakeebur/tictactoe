import React, { useState } from 'react';
import './App.css';
import {
  EMPTY,
  PLAYER_X,
  PLAYER_O,
  checkWinner,
  makeMove,
  getBestMove,
} from './GameLogic';

const createEmptyBoard = () => {
  return Array(3)
    .fill(0)
    .map(() => Array(3).fill(0));
};

const App = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [started, setStarted] = useState(false);
  const [replayHistory, setReplayHistory] = useState([]);

  const startGame = () => {
    setBoard(createEmptyBoard());
    setStarted(true);
    setReplayHistory([]);
  };

  const replay = () => {
    if (replayHistory.length > 0) {
      const prevBoard = replayHistory.pop();
      setBoard(prevBoard);
    }
  };

  const onCellClick = (row, col) => {
    if (started && board[row][col] === EMPTY) {
      const newBoard = JSON.parse(JSON.stringify(board));
      makeMove(newBoard, row, col, PLAYER_X);
      setReplayHistory([...replayHistory, board]);
      setBoard(newBoard);
  
      let winner = checkWinner(newBoard);
      if (winner !== EMPTY) {
        setStarted(false);
        alert(winner === PLAYER_X ? 'You won!' : 'AI won!');
        startGame();
        return;
      } else if (isBoardFull(newBoard)) {
        setStarted(false);
        alert('It\'s a draw!');
        startGame();
        return;
      }
  
      const aiMove = getBestMove(newBoard);
      makeMove(newBoard, aiMove.row, aiMove.col, PLAYER_O);
  
      winner = checkWinner(newBoard);
      if (winner !== EMPTY) {
        setBoard(newBoard);
        setStarted(false);
        setTimeout(() => {
          alert('AI won!');
          startGame();
        }, 100);
      } else if (isBoardFull(newBoard)) {
        setStarted(false);
        setTimeout(() => {
          alert('It\'s a draw!');
          startGame();
        }, 100);
      } else {
        setBoard(newBoard);
      }
    }
  };
  
  
  
  const isBoardFull = (board) => {
    return board.every(row => row.every(cell => cell !== EMPTY));
  };
  

  const renderCell = (value) => {
    if (value === PLAYER_X) {
      return 'X';
    } else if (value === PLAYER_O) {
      return 'O';
    } else {
      return '';
    }
  };

  return (
    <div className="container">
      <h1 className="gameTitle">Shakeeb Rahman's Tic-Tac-Toe vs AI Game</h1>
      <div className="howToPlay">
        <h2>Instructions:</h2>
        <p>
          To start the game OR reset the game , click the <strong>Start</strong> button. To replay a move, click the
          <strong> Replay</strong> button.
        </p>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => onCellClick(rowIndex, colIndex)}
              >
                <span className="cellText">{renderCell(cell)}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button onClick={startGame} className="startButton">
          Start
        </button>
        <button onClick={replay} className="replayButton">
          Replay
        </button>
      </div>
    </div>
  );
  
};

export default App;
