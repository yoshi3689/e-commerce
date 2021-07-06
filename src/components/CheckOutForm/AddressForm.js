import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
// https://react-hook-form.com/api/useform
//probably replace this hook with redux and redux-form
//nah, hook-form is great! much less re-renders!
//once we press the submit button, it fills out the field for us?!
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { commerce } from '../../lib/commerce';
import FormInput from './FormInput';

const style = {display: 'flex', justifyContent: 'space-between'};
const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  //console.log(shippingCountries, shippingCountry);
  const fetchCountries = async(tokenId) => {
    // console.log(tokenId)
    const response = await commerce.services.localeListShippingCountries(tokenId);
    // console.log(response)
    setShippingCountries(response.countries);
    setShippingCountry(Object.keys(response.countries)[0]);
  }

  const fetchSubDivisions = async(countryCode) => {
    // as always, the prop name, subdivisions, is pre-defined by the creator of this API 
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubDivisions(subdivisions);
    setShippingSubDivision(Object.keys(subdivisions)[0]);
  }

  const fetchOptions = async(tokenId, country, subDivision) => {
    // I have to assign the value of subDivision to the key 'region' to make the request go through
    const options = await commerce.checkout.getShippingOptions(tokenId, {country, region: subDivision});
    // console.log(options)
    setShippingOptions(options);
    if(options[0]) setShippingOption(options[0].id);
  }

  useEffect(() => {
    fetchCountries(checkoutToken.id);
  }, [])

  useEffect(() => {
    if(shippingCountry) fetchSubDivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if(shippingSubDivision) fetchOptions(checkoutToken.id, shippingCountry, shippingSubDivision);
  }, [shippingSubDivision]);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Shipping Information
      </Typography>
      <FormProvider {...methods}>
        {/* handleSubmit is a property of useForm() */}
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubDivision, shippingOption }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="city" />
            <FormInput required name="zip" label="Zip" />
            <br />
            {/* add an empty div here */}
            <Grid item xs={12} sm={6}>
              <InputLabel>Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) =>(
                                                        //1st .map: creating a new array whose item is an object that holds the keys of 'code' and 'id'
                                                        //But I dont really understand the [code, name]
                                                        //2nd .map: then rendering a dropdown item using the new array
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Region</InputLabel>
              <Select value={shippingSubDivision} fullWidth onChange={(e) => setShippingSubDivision(e.target.value)}>
                {Object.entries(shippingSubDivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              {/* interchangeable with a native <select>, <AutoComplete> has more extended features */}
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {
                shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))
                }
              </Select>
            </Grid>
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

export default AddressForm
