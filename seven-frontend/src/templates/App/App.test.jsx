import { render, screen, fireEvent } from '@testing-library/react';
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

  it("Should test Props value", () => {
    const { getByTestId, getByRole } = render(<App word={2}/>);
    const incrementBtn = getByRole("button", { name: "Increase"});
    const wordValue = Number(getByTestId("word").textContent);
    expect(wordValue).toEqual(2);
    fireEvent.click(incrementBtn);
    const wordValue2 = Number(getByTestId("word").textContent);
    expect(wordValue2).toEqual(3);
  });
})


