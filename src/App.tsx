import { useState } from 'react';
import Button from './compotents/Button/Button';
import Input from './compotents/Input/input';

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Button onClick={() => {
        setCounter(2);
        console.log(counter);
      }
      }>Кнопка</Button>  
      <Button appearance='big'>Кнопка 2</Button>
      <Input placeholder='Email'/>
    </>
  );
}

export default App;
