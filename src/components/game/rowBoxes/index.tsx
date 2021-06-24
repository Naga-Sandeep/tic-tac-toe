import React from 'react';
import { Grid } from '@material-ui/core';
import { Players } from '../constants';
import Box from '../box';

interface RowProps {
  rowBoxes: Players[] | null[];
  rowIndex: number;
  onSelect: (rowIndex: number, columnIndex: number) => void;
}
const RowBoxes = ({ rowBoxes, rowIndex, onSelect }: RowProps) => {
  return (
    <Grid container justify="center">
      {rowBoxes.map((box, index) => (
        <Box
          key={index.toString()}
          boxValue={box}
          rowIndex={rowIndex}
          columnIndex={index}
          onSelect={onSelect}
        />
      ))}
    </Grid>
  );
};

export default RowBoxes;
