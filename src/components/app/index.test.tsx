import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders welcome text', () => {
  render(<App />);
  const welcomeText = screen.getByText(
    /Welcome to tic-tac-tae. Happy game time!!/i
  );

  expect(welcomeText).toBeInTheDocument();
});
