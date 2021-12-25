import React from 'react'
import { IndividualProduct } from '../../components/index';
import useStyles from '../../components/Products/styles';

const ProductDetail = () => {
  const classes = useStyles();
    return (
      <main className={classes.content} >
        <IndividualProduct />
      </main>
    )
}

export default ProductDetail;