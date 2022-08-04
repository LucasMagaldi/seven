import React, { useState } from "react";

import Layout from "../Layout/Layout";
import { Wrapper } from './styles'

function App({word}) {

  const [wordValue, setWordValue] = useState(word);

  return (
    <>
      <Layout />
    </>
    
  );
}

export default App;
