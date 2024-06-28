import { useState } from 'react';
import './App.css';
import Button from './compotents/Button/Button';

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Button onClick={() => {
        setCounter(2);
        console.log(counter);
      }
      }>Кнопка</Button>  
    </>
  );
}

export default App;
