import { useState } from 'react';
import Button from './compotents/Button/Button';
import Input from './compotents/Input/input';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

const router = createBrowserRouter([
  {path: '/',
    element: <Menu />
  },
  {path: '/cart',
    element: <Cart />
  },
  {path: '*',
    element: <Error />
  }
])

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

      <RouterProvider router={router} />
    </>
  );
}

export default App;
