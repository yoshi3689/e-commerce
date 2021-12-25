import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

import { Products } from '../../components';
import withFetchProducts from '../../components/HOC/withFetchProducts';
import withSortByCategory from '../../components/HOC/withSortByCategory';

const Category = ({ products }) => {
  return (
    <>
      <Button size="medium" type="button" variant="contained" component={Link} to="/categories" >See Categories</Button>
      <Products products={products} />
    </>
  )
}
                        //withFetchProducts ==> withSort
export default withFetchProducts(withSortByCategory(Category));