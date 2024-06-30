import { useState } from 'react';
import Button from './compotents/Button/Button';
import Input from './compotents/Input/input';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Menu } from './pages/Menu/Menu';
import { Error } from './pages/Error/Error';

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
      <div>
        <a href='/'>Меню</a>
        <a href='/cart'>Корзина</a>
      </div>

      <Routes>
        <Route path='/' element={<Menu />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
