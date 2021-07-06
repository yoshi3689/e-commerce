import React, { useEffect , useState} from 'react'
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { Navbar, Products, Cart, CheckOut } from './components';
// import { COMMERCE_API_KEY_REACT } from '../.env'
// require('dotenv').config();

console.log(process.env.COMMERCE_API_KEY_REACT);

const App = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');


  const fetchProducts = async() => {
    const { data } = await commerce.products.list();
    setProducts(data);  
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  }
  const addToCart = async(id, quantity) => {
    const { cart } = await commerce.cart.add(id, quantity);
    // console.log(response);
    setCart(cart);
  }
  const removeFromCart = async(id) => {
    const { cart } = await commerce.cart.remove(id);
    setCart(cart);
  }
  const updateCart = async(id, quantity) => {
    const { cart } = await commerce.cart.update(id, {quantity});
    // for the updateCart, you have to wrap quantity in { }!!!
    setCart(cart);
  }
  const emptyCart = async() => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const captureCheckout = async(tokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(tokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }
  
  useEffect(()=>{
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart, products);
  // console.log(products, process.env.COMMERCE_API_KEY_REACT);
  return (
    <>
      <Router>
      <Navbar badgeNum={cart? cart.total_items : 0} />
        <Switch>
        <Route exact path="/" render={() => <Products products={products} add={addToCart} />} />
        <Route 
          path="/cart" 
          render={() => <Cart 
            cart={cart} removeFromCart={removeFromCart}
            updateCart={updateCart}
            emptyCart={emptyCart}
            />} 
        />
        <Route path="/checkout">
          <CheckOut cart={cart} onCaptureCheckOut={captureCheckout} order={order} error={errorMessage} />
        </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
