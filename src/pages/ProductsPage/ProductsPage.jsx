import React from 'react'
 
import { Products } from '../../components'
// import Hero from '../../components/Hero/Hero';
import withFetchProducts from "../../components/HOC/withFetchProducts"

import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { ELEMENTS_ALL_PRODUCTS } from '../constants';


const ProductsPage = ({ products }) => {
  return (
    <>
      <SectionWrapper btns={ELEMENTS_ALL_PRODUCTS.btns} titleText={ELEMENTS_ALL_PRODUCTS.titleText} >
        {products && (<Products products={products} />) }
      </SectionWrapper>
    </>
  )
}

export default withFetchProducts(ProductsPage);