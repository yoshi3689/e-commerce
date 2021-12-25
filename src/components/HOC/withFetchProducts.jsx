import React, { useEffect } from 'react'
import { fetchCategories, fetchProducts } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../Products/styles'

const withFetchProducts = (WrappedComponent) => ({ ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, categories } = useSelector( state => state.products);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  return products && (
    <main className={classes.content}>
      <WrappedComponent {...props} products={products} categories={categories} />
    </main>
  )

}

// I have to take the main tag out later when I start rendering other components than products
export default withFetchProducts

