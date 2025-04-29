import React, { useState } from 'react';
import Footer from './components/footer';
import Header from './components/Header';

function App() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClick1() {
    setCount1(count1 + 1);
  }

  return (
    <div>
      <Header />
      <h1>Projeto base em React com TypeScript</h1>

      

      <Footer />
    </div>
  );
}

export default App;
