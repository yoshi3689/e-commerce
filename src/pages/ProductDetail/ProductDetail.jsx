import React from 'react'
import { IndividualProduct } from '../../components';
import withFetchProduct from '../../components/HOC/withFetchProduct';

import CommonStructure from '../CommonStructure/CommonStructure';
import { ELEMENTS_PRODUCT_DETAIL } from '../constants';

const ProductDetail = ({...props }) => {
    return (
        <>
            <CommonStructure btns={ELEMENTS_PRODUCT_DETAIL.btns} titleText={props.product.name} >
                <IndividualProduct {...props} />
            </CommonStructure>
        </>
    )
}

export default withFetchProduct(ProductDetail);