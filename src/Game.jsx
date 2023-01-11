import { useState } from 'react';

import Board from './components/Board';

import styles from './Game.module.css';

function Game() {
  return (
    <div className={styles.game}>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

export default Game;
