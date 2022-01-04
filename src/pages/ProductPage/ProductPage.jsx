import React from 'react'
import { IndividualProduct } from '../../components';
import withFetchProduct from '../../components/HOC/withFetchProduct';

import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { ELEMENTS_PRODUCT_DETAIL } from '../constants';

const ProductPage = ({...props }) => {
    return (
        <>
            <SectionWrapper btns={ELEMENTS_PRODUCT_DETAIL.btns} titleText={props.product.name} >
                <IndividualProduct {...props} />
            </SectionWrapper>
        </>
    )
}

export default withFetchProduct(ProductPage);