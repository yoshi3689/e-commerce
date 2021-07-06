import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../redux';
import Product from './Product/Product';
import useStyles from './styles'

const Products = ({ add }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products } = useSelector( state => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={5}>
        {/* grid spacing adds 4px padding to each of the items as the index increases by 1 */}
        {products && Object.values(products).map(item => {
          return(
            <Grid item key={item.id} xs={12} md={4} lg={3}>
              {/* 12 means that the max-width and flex-bais is set to 100%, allowing one g-item to take up a whole row */}
              {/* md4 sets the max-width and flex-basis to 33% on viewport width greater than 960px, meaning 3 items can be placed in one row */}
              <Product product={item} add={add} />
            </Grid>
          )
        })}
      </Grid>
    </main>
  )
}

export default Products
