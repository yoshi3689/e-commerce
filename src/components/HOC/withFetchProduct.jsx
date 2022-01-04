import { fetchProduct } from '../../redux'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const withFetchProduct = (WrappedComponent) => ({ ...props }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const increment = () => quantity < product.inventory.available && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    const { pathname } = window.location;
    let lastChar = pathname.slice(-1);
    dispatch(fetchProduct(pathname.slice(pathname.lastIndexOf('/') + 1, -1) + lastChar));
  }, [dispatch]);

  return (
    <>
    {(product && !product.length) && 
      <WrappedComponent { ...props } 
        product={product} 
        quantity={quantity}
        increment={increment}
        decrement={decrement} 
      />}
    </>
  )
}

export default withFetchProduct;
