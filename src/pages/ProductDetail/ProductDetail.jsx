import React from 'react'
import { IndividualProduct } from '../../components';
import withFetchProduct from '../../components/HOC/withFetchProduct';

import CommonStructure from '../CommonStructure/CommonStructure';
import { ELEMENTS_PRODUCT_DETAIL } from '../constants';

const ProductDetail = ({ product }) => {
    return (
        <>
            <CommonStructure btns={ELEMENTS_PRODUCT_DETAIL.btns} titleText={product.name} >
                <IndividualProduct product={product} />
            </CommonStructure>
        </>
    )
}

export default withFetchProduct(ProductDetail);