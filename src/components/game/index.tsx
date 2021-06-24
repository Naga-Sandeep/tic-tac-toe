import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { cloneDeep } from 'lodash';
import { Players } from './constants';
import RowBoxes from './rowBoxes';

const initialGameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameGrid = () => {
  const [gameState, setGameState] = useState<Array<any[]>>(initialGameState);
  const [playerTurn, setPlayerTurn] = useState(Players.PLAYER_1);

  const onClickHandler = (rowIndex: number, columnIndex: number) => {
    // mark the box based on turn
    setGameState((prevGameState) => {
      const updatedGameState = cloneDeep(prevGameState);
      updatedGameState[rowIndex][columnIndex] = playerTurn;
      return updatedGameState;
    });

    // swap the turn
    setPlayerTurn((prevTurn) =>
      prevTurn === Players.PLAYER_1 ? Players.PLAYER_2 : Players.PLAYER_1
    );

    // check for strike and announce a winner
  };

  return (
    <Grid container justify="center">
      <h2>
        Its {playerTurn === Players.PLAYER_1 ? 'Player 1' : 'Player 2'} turn
      </h2>
      {gameState.map((rowBoxes, index) => (
        <RowBoxes
          key={index.toString()}
          rowBoxes={rowBoxes}
          rowIndex={index}
          onSelect={onClickHandler}
        />
      ))}
    </Grid>
  );
};

export default GameGrid;
