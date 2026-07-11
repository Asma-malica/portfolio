import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Asma/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
