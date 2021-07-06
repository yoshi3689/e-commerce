import React from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, CardActions } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

const Product = ({ product, add }) => {
  const classes = useStyles();
  // console.log(add);
  return (
    <Card className={classes.root}>
      {/* img */}
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      {/* info */}
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"></Typography>
      </CardContent>
      {/* button/buttons */}
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => add(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
