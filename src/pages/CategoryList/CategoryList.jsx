import React from 'react'
import { Categories } from '../../components'
import withFetchCategories from '../../components/HOC/withFetchCategories'
import CommonStructure from '../CommonStructure/CommonStructure';
import { ELEMENTS_CATEGORY_LIST } from '../constants';

const CategoryList = ({ categories }) => {
  return (
    <>
      <CommonStructure btns={ELEMENTS_CATEGORY_LIST.btns} titleText={ELEMENTS_CATEGORY_LIST.titleText}  >
        {categories && <Categories categories={categories} />}
      </CommonStructure>
    </>
  );
}

export default withFetchCategories(CategoryList);