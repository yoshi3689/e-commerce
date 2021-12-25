import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

import { Products } from '../components'
import withFetchProducts from '../components/HOC/withFetchProducts';

const Home = ({ products }) => {
  // sort by categories button needed
  return (
    <>
      <Button size="medium" type="button" variant="contained" component={Link} to="/categories" >See Categories</Button>
      { products && <Products products={products} /> }
    </>
  )
}

export default withFetchProducts(Home);
