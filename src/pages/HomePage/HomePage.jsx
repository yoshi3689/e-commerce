import React from 'react'
 
import { SortedProducts } from '../../components'
import Hero from '../../components/Hero/Hero';
import withFetchProducts from "../../components/HOC/withFetchProducts"


import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { ELEMENTS_HOME } from '../constants';


const HomePage = ({ products }) => {
  return (
    <>
      <Hero imgSrc={"/img/heros/hero_home.jpg"} />
      <SectionWrapper btns={ELEMENTS_HOME.btns} titleText={ELEMENTS_HOME.titleText} >
        {products && (<SortedProducts products={products} customFilter="featured" />) }
      </SectionWrapper>
    </>
  )
}

export default withFetchProducts(HomePage);