import React from 'react'
import { Cart } from '../../components'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

import { ELEMENTS_CART } from "../constants"
const CartPage = () => {
  return (
    <>
      <SectionWrapper titleText={ELEMENTS_CART.titleText}>
        <Cart />
      </SectionWrapper> 
    </>
  )
}

export default CartPage
