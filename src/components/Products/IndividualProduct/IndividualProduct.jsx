import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart, Add, Remove } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import useStyles from './styles'
import { addToCart } from '../../../redux';
import withFetchProduct from '../../HOC/withFetchProduct';

const IndividualProduct = ({ product, quantity, increment, decrement }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  
  let itemToAdd = { id: product.id, quantity };
  const onAddToCart = () => {
    dispatch(addToCart(itemToAdd));
  }
  return (
    <div>
      <Card className={classes.split} >  

<CardMedia image={product.image.url} title={product.type} className={classes.media} />        

  <div className={classes.content} >
    <CardContent className={classes.content1} >
      <Typography variant='h4' className={classes.contentItem} >{product.name} </Typography>
      <Typography variant='body1' className={classes.contentItem} >{product.description}</Typography>
      
      <div className={classes.flexContainer}>
        <Typography variant='h6' >{product.price.formatted_with_symbol}</Typography>

        <Typography variant="body2" >
        {!product.is.sold_out || product.inventory.available? `${product.inventory.available} items available` : 'sold out'}
        </Typography>
      </div>
    </CardContent>

  <CardActions  >

    <IconButton aria-label="Add to Cart" onClick={onAddToCart} >
      <AddShoppingCart />
    </IconButton >

    <div className={classes.quantityControl} >
    <IconButton aria-label="Add to Cart" onClick={increment} >
      <Add />
    </IconButton >
    <Typography variant="body1" >
      {quantity}
    </Typography>
    <IconButton aria-label="Add to Cart" onClick={decrement} >
      <Remove />
    </IconButton >
    </div>

  </CardActions>
  </div>

</Card>
{/* <div className="alert">
you cannot put anumber of items more than the number available!
</div> */}
    </div>
  )
}

export default withFetchProduct(IndividualProduct); 
