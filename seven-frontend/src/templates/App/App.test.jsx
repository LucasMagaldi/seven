import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testing App", () => {
  it('renders learn react link', () => {
  const { debug } = render(<App />);
  debug();
  const headingContainer = screen.getByRole('heading', {name: 'Home'}).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'red'
  });

  expect(headingContainer).toMatchSnapshot();

});

  it("Should test Props", () => {
    const { getByTestId } = render(<App word={2}/>);
    const wordValue = getByTestId("word").textContent;
    expect(wordValue).toEqual(7);
  });
})


