import React from "react";
import { Wrapper } from './styles'

function App({word}) {
  return (
    <Wrapper className="App">
      <h1>Home</h1>
      <p data-testid="word">{word}</p>
    </Wrapper>
  );
}

export default App;
