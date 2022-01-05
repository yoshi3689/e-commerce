import React from 'react'
import { SortedProducts } from '../../components';
import withFetchProducts from '../../components/HOC/withFetchProducts';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { ELEMENTS_CATEGORY } from '../constants';

const ProductsByCategoryPage = ({ ...props }) => {
  const products = props.products;
  return (
    <SectionWrapper btns={ELEMENTS_CATEGORY.btns} titleText={props.match.params.category + " products"} >
      {products && <SortedProducts products={products} customFilter={props.match.params.category} />}
    </SectionWrapper>
  )
}
export default withFetchProducts(ProductsByCategoryPage);