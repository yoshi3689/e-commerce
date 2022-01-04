import React from 'react';
import { Grid } from '@material-ui/core';
import { Product } from '../index';

const Products = ({ products }) => {
  return (
      <Grid container spacing={5}>
        {products.length && products.map(item => {
          return(
            <Grid item key={item.id} xs={12} sm={12} md={6} lg={4}>
              <Product product={item} />
            </Grid>
          )
        })}
      </Grid>
  )
}

export default Products;