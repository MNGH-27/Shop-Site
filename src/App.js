import React from 'react';
import {Route , Switch , Redirect} from 'react-router-dom';

// Components
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

import './App.css';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <div className='App-container'>
          <Switch>
            <Route path={"/products/:id"} component={ProductDetail}/>
            <Route path={"/products"} component={Store}/>
            <Route path={'/cart'} component={ShopCart} />
            <Redirect to={"/products"} />
          </Switch>
        </div>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
