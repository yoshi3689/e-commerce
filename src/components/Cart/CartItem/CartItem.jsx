import React from 'react'
import { Card, CardContent, CardMedia, Button, Typography, CardActions } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import useStyles from './styles'
import { updateCart, removeFromCart } from '../../../redux'; 

const CartItem = ({ item, }) => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  // needed to do this because item object is read-only, and createAsyncThunk doesn't let me pass the second argument
  let itemToUpdate = {id: item.id, quantity: item.quantity};

  const increaseQuantity = () => {
    itemToUpdate.quantity += 1;
    dispatch(updateCart(itemToUpdate));
  }

  const decreaseQuantity = () => {
    itemToUpdate.quantity -= 1;
    dispatch(updateCart(itemToUpdate));
  }

  return (
    <>
    <Card>
      <CardMedia className={classes.media} image={item.image.url} alt={item.name} />
      <CardContent className={classes.cardContent} >
        <Typography variant="h5">
          {item.name}
        </Typography>
        <Typography variant="h6">
          {item.price.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions} >
        <div className={classes.buttons}>
          {/* <Typography variant="subtitle2">quantity</Typography> */}
          <Button className={classes.smallBtn} type="button" size="small" onClick={ decreaseQuantity } > - </Button>
          <Typography> {item.quantity} </Typography>
          <Button className={classes.smallBtn} type="button" size="small" onClick={ increaseQuantity }> + </Button>
        </div>
          <Button type="button" variant="contained" size="large" color="secondary" onClick={() => dispatch(removeFromCart(item.id))} > <Delete /> </Button>
      </CardActions>
    </Card></>
  )
}

export default CartItem
