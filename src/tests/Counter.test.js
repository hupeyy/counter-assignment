// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, waitFor } from '@testing-library/react';
import Counter from '../components/Counter';
import { wait } from '@testing-library/user-event/dist/utils';


beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();  
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', {name: '+'});
  incrementButton.click();
  const count = screen.getByTestId('count');
  waitFor(() => {
    expect(count).toHaveTextContent('1');
  });
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole('button', {name: '-'});
  decrementButton.click();
  const count = screen.getByTestId('count');
  waitFor(() => {
    expect(count).toHaveTextContent('-1');
  });
});
