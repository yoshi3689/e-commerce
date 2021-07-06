import React from 'react'
import { Grid, Typography, Button, Container } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem/CartItem';


const Cart = ({ cart, removeFromCart, updateCart, emptyCart
   }) => {
    //  console.log(removeFromCart, updateCart, emptyCart)
  const classes = useStyles();
  const EmptyCart = () => (
   <>
   <div className={classes.toolbar} />
    <Typography variant="h5" >
      No items in your shopping cart
    </Typography>
    <div className={classes.toolbar} />
    <Button component={Link} to= "/" className={classes.checkoutButton} size="large" type="button" variant="contained" >Go Back Home</Button>
   </>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map(item => (
        <Grid item xs={12} md={4} key={item.id}>
          <CartItem 
            item={item}  
            removeFromCart={removeFromCart} 
            updateCart={updateCart}
          />
        </Grid>
          )
        )}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        
        <div className={classes.btns}>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={emptyCart} >Empty Cart</Button>
          <Button component={Link} to= "/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
    
  )
  // console.log(cart)
  return (
    <Container >
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">Your Cart</Typography>
      {cart.total_items
        ? <FilledCart />
        : <EmptyCart />
      } 
    </Container>
  )
}

export default Cart
