import React from 'react'

import { CheckOut } from '../../components'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { ELEMENTS_CHECKOUT } from '../constants'

const CheckoutPage = ({ userLocation }) => {
  return (
    <>
      <SectionWrapper titleText={ELEMENTS_CHECKOUT.titleText}>
        <CheckOut userLocation={userLocation} />
      </SectionWrapper>
    </>
  )
}

export default CheckoutPage
