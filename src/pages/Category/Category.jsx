import React from 'react'
import { Products } from '../../components';
import withFetchProducts from '../../components/HOC/withFetchProducts';
import withSortByCategory from '../../components/HOC/withSortByCategory';
import CommonStructure from '../CommonStructure/CommonStructure';
import { ELEMENTS_CATEGORY } from '../constants';

const Category = ({ products }) => {
  return (
    <>
      <CommonStructure btns={ELEMENTS_CATEGORY.btns} titleText={ELEMENTS_CATEGORY.titleText} >
        <Products products={products} />
      </CommonStructure>
    </>
  )
}
export default withFetchProducts(withSortByCategory(Category));