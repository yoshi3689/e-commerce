import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    // A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
    <Grid item xs={12} sm={6} >
      <Controller 
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
        // as={TextField}
        //instead, we have to do it like below, if we want to wrap a component with Controller
        render={({ field }) =>
        (<TextField {...field} label={label} required={required} />)}
      />
    </Grid>
  )
}

export default FormInput