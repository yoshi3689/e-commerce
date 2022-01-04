import React from 'react'
 
import { Products } from '../../components'
import Hero from '../../components/Hero/Hero';
import withFetchProducts from "../../components/HOC/withFetchProducts"
import withSortByCategory from '../../components/HOC/withSortByCategory';

import CommonStructure from '../CommonStructure/CommonStructure';
import { ELEMENTS_HOME } from '../constants';


const Home = ({ products }) => {
  return (
    <>
      <Hero imgSrc={"/img/heros/hero_home.jpg"} />
      <CommonStructure btns={ELEMENTS_HOME.btns} titleText={ELEMENTS_HOME.titleText} >
        {products && (<Products products={products} />) }
      </CommonStructure>
    </>
  )
}

export default withFetchProducts(withSortByCategory(Home));
