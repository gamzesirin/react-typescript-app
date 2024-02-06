import './App.css';

import React, { useState } from 'react';

import Hello from './components/Hello';

function App() {
  const [inputValue, setInputValue] = useState(''); 
  const [count, setCount] = useState(100); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value); 
  };

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 5); 
  };

  return (
    <>
      <Hello 
        name="TypeScript" 
        description="Bu benim ilk typescript uygulamam" 
        onSmthHappen={(name) => { console.log(name); }}
      />
      <input type="text" onChange={handleChange} placeholder='yazınız...' />
      <p>{inputValue}</p>
      <button onClick={handleButtonClick}>Butona tıkla</button>
      <p>Count: {count}</p> 
    </>
  );
}

export default App;
