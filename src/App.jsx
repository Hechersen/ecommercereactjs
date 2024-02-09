import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/context.jsx'; 
import Cart from './componentes/Cart/Cart.jsx';
import Checkout from './componentes/Checkout/Checkout.jsx';

function App() {  

  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />         
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
