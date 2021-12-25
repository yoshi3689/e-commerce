import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, fetchSubDivisions, fetchOptions } from '../../redux';

const withFetchShippingDetails = (WrappedComponent) => ({ ...props }) => {

  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubDivision, setShippingSubDivision] = useState('');
  const [shippingOption, setShippingOption] = useState('');

  const { countries, subdivisions, options } = useSelector(state => state.shipping);
  const dispatch = useDispatch();

  // these three below are trimming down the fetched arrays and objects 
  const country = countries && Object.entries(countries).map(([code, name]) => ({ id: code, label: name }));
  const region = subdivisions && Object.entries(subdivisions).map(([code, name]) => ({ id: code, label: name }));
  const option = options && options.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }));

  const listsToRender = options ? {
    'countries': {list: country, onClick: setShippingCountry, value: shippingCountry},
    'regions': {list: region, onClick: setShippingSubDivision, value: shippingSubDivision},
    'options': {list: option, onClick: setShippingOption, value: shippingOption}
  } : null;

  const getFirstKey = (obj) => {
    return Object.keys(obj)[0];
  }

  
    
  useEffect(() => {
    // This works only on the first render
    dispatch(fetchCountries(props.checkoutToken.id))
    .then(({ payload }) => { 
      setShippingCountry(getFirstKey(payload)) 
    })
    .catch(err => alert(err))
    
  }, [dispatch, props.checkoutToken.id]);

  useEffect(() => {
    // This is supposed to work on every shippingCountry value change
    if(shippingCountry) {
      dispatch(fetchSubDivisions(shippingCountry))
        .then(({ payload }) => {
          setShippingSubDivision(getFirstKey(payload));
          
          return { country: shippingCountry, region: getFirstKey(payload) }
        })
        .then(({ country, region }) => {
          dispatch(fetchOptions({ tokenId: props.checkoutToken.id, country, region }))
          .then(({payload}) => setShippingOption(payload[0].id))
        })
        .catch(err => alert(err))
      }
  }, [dispatch, props.checkoutToken.id, shippingCountry])

  return listsToRender ? 
  <WrappedComponent 
    {...props} 
    shippingDetails={listsToRender} 
    shippingCountry={shippingCountry} 
    shippingSubDivision={shippingSubDivision}
    shippingOption= {shippingOption}
    />
 :<LinearProgress />
}
export default withFetchShippingDetails;
