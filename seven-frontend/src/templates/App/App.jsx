import React, { useState } from "react";
import { Wrapper } from './styles'

function App({word}) {

  const [wordValue, setWordValue] = useState(word);

  return (
    <Wrapper className="App">
      <h1>Home</h1>
      <p data-testid="word">{wordValue}</p>

      <button onClick={()=> {setWordValue(wordValue+1)}}>Increase</button>
    </Wrapper>
  );
}

export default App;
