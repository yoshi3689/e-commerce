import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Navbar } from './components';
import { fetchCart } from './redux';
import { 
  CategoriesPage, ProductsByCategoryPage, ProductPage,
  HomePage, ProductsPage, CheckoutPage, CartPage 
  } from './pages/index';

import withFetchUserLocation from './components/HOC/withFetchUserLocation';

const App = ({ userLocation }) => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar totalItems={cart.total_items} />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/checkout" component={() => <CheckoutPage userLocation={userLocation} />} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path='/products/:productDetail' component={ProductPage} /> 
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path='/categories/:category' component={ProductsByCategoryPage} /> 
            <Route exact path='/:productDetail' component={ProductPage} /> 
            <Route exact path='/categories/:category/:productDetail' component={ProductPage} /> 
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default withFetchUserLocation(App);
