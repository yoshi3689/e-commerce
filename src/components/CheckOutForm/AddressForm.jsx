import React from 'react'
import { InputLabel, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormInput from './FormInput';
import { setShippingInfo } from '../../redux';
import withFetchShippingDetails from '../HOC/withFetchShippingDetails';
import ShippingDropdown from './ShippingDropdown';

const style = {display: 'flex', justifyContent: 'space-between'};

const AddressForm = ({ next, shippingDetails, shippingCountry, shippingSubDivision, shippingOption }) => {

  const formInfo = [
["firstName", "First Name"],
["lastName", "Last Name"],
["address1", "Address"], 
["email", "Email"],
["city", "city"],
["zip", "Zip"]
]  
  const methods = useForm();
  const dispatch = useDispatch();
  
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Shipping Information
      </Typography>
      <FormProvider {...methods}>
        
        <form 
          onSubmit={methods.handleSubmit(info => {
            dispatch(setShippingInfo({ 
              ...info, 
              shippingCountry, 
              shippingSubDivision, 
              shippingOption 
            }));
            next();
          }
        )}>
          <Grid container spacing={3}>
            {formInfo.map(item => (
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
            <Button type="submit" variant="contained" color="primary">
              Proceed
            </Button>
          </div>
        </form>
      </FormProvider>
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