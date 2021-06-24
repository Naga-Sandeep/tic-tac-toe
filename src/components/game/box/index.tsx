import { Button, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { Players } from '../constants';

interface BoxProps {
  boxValue: Players.PLAYER_1 | Players.PLAYER_2 | null;
  rowIndex: number;
  columnIndex: number;
  onSelect: (rowIndex: number, columnIndex: number) => void;
}

const Box = ({ boxValue, rowIndex, columnIndex, onSelect }: BoxProps) => {
  const classes = useStyles();

  const onClickHandler = (event: any) => {
    console.log(event.target.text);
    const value = event?.target?.value;
    if (value) return;
    onSelect(rowIndex, columnIndex);
  };

  return (
    <Grid item key={rowIndex - columnIndex}>
      <Button
        variant="contained"
        color="primary"
        onClick={onClickHandler}
        className={classes.boxBtn}
      >
        {boxValue}
      </Button>
    </Grid>
  );
};

export default Box;
