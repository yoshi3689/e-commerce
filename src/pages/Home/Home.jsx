import React from 'react'
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
 
import { Products } from '../../components'
import Hero from '../../components/Hero/Hero';
import withFetchProducts from "../../components/HOC/withFetchProducts"
import CommonStructure from '../CommonStructure/CommonStructure';
import { ELEMENTS_HOME } from '../constants';


const Home = ({ products }) => {
  return (
    <>
      <Hero imgSrc={"/img/heros/hero_home2.jpg"} />
      <CommonStructure btns={ELEMENTS_HOME.btns} titleText={ELEMENTS_HOME.titleText} >
        {products && (<Products products={products} />) }
      </CommonStructure>
    </>
  )
}

export default withFetchProducts(Home);
