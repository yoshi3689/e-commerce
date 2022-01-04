import React from 'react'
import { Categories } from '../../components'
import withFetchCategories from '../../components/HOC/withFetchCategories'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { ELEMENTS_CATEGORY_LIST } from '../constants';

const CategoriesPage = ({ categories }) => {
  return (
    <>
      <SectionWrapper btns={ELEMENTS_CATEGORY_LIST.btns} titleText={ELEMENTS_CATEGORY_LIST.titleText}  >
        {categories && <Categories categories={categories} />}
      </SectionWrapper>
    </>
  );
}

export default withFetchCategories(CategoriesPage);