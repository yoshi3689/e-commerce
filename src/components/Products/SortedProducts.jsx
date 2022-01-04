import React from 'react';
import withSortByCategory from '../HOC/withSortByCategory';
import Products from './Products';
const SortedProducts = ({ products, customFilter }) => {
  return (
    <Products products={products} customFilter={customFilter} />
  )
}

export default withSortByCategory(SortedProducts);
