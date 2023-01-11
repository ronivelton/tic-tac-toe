import { useState } from 'react';
import Square from './Square';

import styles from './Board.module.css';

import calculateWinner from '../utils/calculateWinner';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickSquare = (square) => {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[square] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = (
      <span>
        winner:{' '}
        <span style={{ color: winner === 'X' ? '#E3371E' : '#103778' }}>
          {winner}
        </span>
      </span>
    );
  } else {
    status = (
      <span>
        Next player:{' '}
        <span style={{ color: xIsNext ? '#E3371E' : '#103778' }}>
          {xIsNext ? 'X' : 'O'}
        </span>
      </span>
    );
  }

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardInfo}>
        {status}

        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
          }}
          type="button"
        >
          Reiniciar
        </button>
      </div>
      <main className={styles.board}>
        <div className={styles.boardRows}>
          <Square
            value={squares[0]}
            onClickSquare={() => handleClickSquare(0)}
          />
          <Square
            value={squares[1]}
            onClickSquare={() => handleClickSquare(1)}
          />
          <Square
            value={squares[2]}
            onClickSquare={() => handleClickSquare(2)}
          />
        </div>

        <div className={styles.boardRows}>
          <Square
            value={squares[3]}
            onClickSquare={() => handleClickSquare(3)}
          />
          <Square
            value={squares[4]}
            onClickSquare={() => handleClickSquare(4)}
          />
          <Square
            value={squares[5]}
            onClickSquare={() => handleClickSquare(5)}
          />
        </div>

        <div className={styles.boardRows}>
          <Square
            value={squares[6]}
            onClickSquare={() => handleClickSquare(6)}
          />
          <Square
            value={squares[7]}
            onClickSquare={() => handleClickSquare(7)}
          />
          <Square
            value={squares[8]}
            onClickSquare={() => handleClickSquare(8)}
          />
        </div>
      </main>
    </div>
  );
}
