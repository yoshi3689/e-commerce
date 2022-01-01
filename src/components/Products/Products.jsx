import React from 'react'
import { Grid } from '@material-ui/core';
// import Product from './Product/Product';
import { Product } from '../index'

const Products = ({ products }) => {
  // I did not let this component independently fetch the one kind of product state, because this might want 
  // to fetch others depending on where it is shown
  return (
      <Grid container spacing={5}>
        {/* <div className={classes.toolbar} /> */}
        {/* grid spacing adds 4px padding to each of the items as the index increases by 1 */}
        {products.length && products.map(item => {
          return(
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              {/* 12 means that the max-width and flex-bais is set to 100%, allowing one g-item to take up a whole row */}
              {/* md4 sets the max-width and flex-basis to 33% on viewport width greater than 960px, meaning 3 items can be placed in one row */}
              <Product product={item} />
            </Grid>
          )
        })}
      </Grid>
  )
}

export default Products