import React, { useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem/CartItem';
import CommonStructure from '../../pages/CommonStructure/CommonStructure';
import { fetchCart, emptyCart } from '../../redux';
import { ELEMENTS_CART } from "./constants"


const Cart = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { cart, isUpdated } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch, isUpdated]);


  const EmptyCart = () => (
   <>
   <div className={classes.toolbar} />
    <Typography variant="h5" >
      No items in your shopping cart
    </Typography>
    <div className={classes.toolbar} />
   </>
  );

  const FilledCart = () => (
    <>
      <Grid container className={classes.gridContainer} spacing={3}>
        {cart.line_items.map(item => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem item={item} />
          </Grid>
          )
        )}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography align="center" variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        
        <div className={classes.btns}>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => dispatch(emptyCart()) } >Empty Cart</Button>
          <Button component={Link} to= "/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
    
  )

  return (
      <>
        <CommonStructure titleText={ELEMENTS_CART.titleText} btns={ELEMENTS_CART.btns} >
        {cart.total_items
          ? <FilledCart />
          : <EmptyCart />
        } 
        </CommonStructure>
      </>
  )
}

export default Cart
