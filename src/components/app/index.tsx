import React from 'react';
import useStyles from './styles';
import Welcome from '../welcome';
import Game from '../game';

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Welcome />
      <Game />
    </>
  );
};

export default App;
