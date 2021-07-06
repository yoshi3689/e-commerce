import React from 'react'
import { Card, CardContent, CardMedia, Button, Typography, CardActions } from '@material-ui/core';
import { ClearAllOutlined } from '@material-ui/icons';
import useStyles from './styles'

const CartItem = ({ item, removeFromCart ,updateCart
   }) => {
  // console.log(item);
  const classes = useStyles();
  return (
    <>
    <Card>
      <CardMedia className={classes.media} image={item.media.source} alt={item.name} />
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
          <Button className={classes.smallBtn} type="button" size="small" onClick={() => updateCart(item.id, item.quantity - 1)} > - </Button>
          <Typography> {item.quantity} </Typography>
          <Button className={classes.smallBtn} type="button" size="small" onClick={() => updateCart(item.id, item.quantity + 1)}> + </Button>
        </div>
          <Button type="button" variant="contained" size="large" color="secondary" onClick={() => removeFromCart(item.id)} > <ClearAllOutlined /> </Button>
      </CardActions>
    </Card></>
  )
}

export default CartItem
