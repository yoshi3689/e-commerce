import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { Navbar, Cart, CheckOut } from './components';
import { fetchCart } from './redux';
import { CategoryList, Category, ProductDetail, Home } from './pages/index';

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
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={() => <CheckOut userLocation={userLocation} />} />
              <Route exact path="/categories" component={CategoryList} />
              <Route exact path='/categories/:category' component={Category} /> 
              {/* I just needed to swap the order of these components, 
              so that a route with a variable is in effect */}
              <Route exact path='/:productDetail' component={ProductDetail} /> 
              <Route exact path='/categories/:category/:productDetail' component={ProductDetail} /> 
              {/* if i get to an individual product page via /categories, nothing gets rendered.
              I assume that the routing is the cause of this problem */}

              
              {/* I dont have to create each page by category,, 
              instead, I can just pass different props to one page component for each category.  
              Think about what;s different in each category page,,,
              1. route name
              2. categoryName
              */}
              </Switch>
      </Router>
    </>
  )
}

export default withFetchUserLocation(App);
