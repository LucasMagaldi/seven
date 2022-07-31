import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { debug } = render(<App />);
  debug();
  const headingContainer = screen.getByRole('heading', {name: 'Home'}).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'red'
  });

  expect(headingContainer).toMatchSnapshot();

});
