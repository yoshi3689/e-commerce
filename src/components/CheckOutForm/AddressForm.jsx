import React, { useState } from 'react'
import { InputLabel, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormInput from './FormInput';
import withFetchShippingDetails from '../HOC/withFetchShippingDetails';
import ShippingDropdown from './ShippingDropdown';

import { setShippingInfo } from '../../redux';
import { geocoding, createAddress } from '../../lib/geocoding';
import { FORM_INFO } from './constants.js'

const style = {display: 'flex', justifyContent: 'space-between'};

const AddressForm = ({ next, shippingDetails, shippingCountry, shippingSubDivision, shippingOption }) => {

  const [isAddressValid, setIsAddressValid] = useState(true);

  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = (info) => {
    try {
    geocoding.get("",{
      params: {
        address: createAddress(...info.address1.split(" "), shippingSubDivision, shippingCountry),
        key: process.env.REACT_APP_GEOCODING_API_KEY
      }
    }).then(res => {
      console.log(res);
      if (res.data.status === "OK" && res.data.results[0].address_components.length > 3) {
        dispatch(setShippingInfo({ 
          ...info, 
          shippingCountry, 
          shippingSubDivision, 
          shippingOption 
        }));
        next();  
      } else {
        setIsAddressValid(false);
      }
    })
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        Shipping Information
      </Typography>
      <FormProvider {...methods}>
        
        <form 
          onSubmit={methods.handleSubmit(info => onSubmit(info))}>
          <Grid container spacing={3}>
            {FORM_INFO.map(item => (
              <FormInput required key={item[0]} name={item[0]} label={item[1]} />
            ))}
            <br />

            {Object.entries(shippingDetails).map(([label, shippingDetailItems]) => {
              return (
                <Grid item xs={12} sm={6} key={label} >
                  <InputLabel>{label}</InputLabel>
                  <ShippingDropdown shippingDetailItems={shippingDetailItems} />
                </Grid>
              )
            }
            )}
          </Grid>
          
          <br />
          <div style={style}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to cart
            </Button>
            {/* change the button variant if the user inputs an invalid address 
            and doesn't change until they fix it */}
            <Button type="submit" variant="contained" color="primary">
              Proceed
            </Button>
          </div>
        </form>
      </FormProvider>
      {!isAddressValid && <div severity="error" > Address invalid. Enter again! </div>}
    </>
  )
}

export default withFetchShippingDetails(AddressForm);

// https://react-hook-form.com/api/useform
//probably replace this hook with redux and redux-form
//nah, hook-form is great! much less re-renders!
//once we press the submit button, it fills out the field for us?!
//handleSubmit is a property of useForm()
            // 1. use .map to make it less repeated
            // 2. make all three start rendering once all the three requests are done.
            //   -can use a local state to watch for the last request to be done
            //   -or simply create a condition that watch the last request to be done
            // 3. while there is nothing in the address form, display a loader instead 
            //1st .map: creating a new array whose item is an object that holds the keys of 'code' and 'id'
            //But I dont really understand the [code, name]
            //2nd .map: then rendering a dropdown item using the new array