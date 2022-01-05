import React, { useEffect, useState } from 'react'
import {  Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles';
import { createToken } from '../../../redux';

const steps = ['Shipping Address', 'Payment Details']

const CheckOut = ({ userLocation }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cart);
  const { token } = useSelector(state => state.token);
  const { order, orderError } = useSelector(state => state.order);

  const next = () => setActiveStep(activeStep + 1);
  const prev = () => setActiveStep(activeStep - 1);

  useEffect(() => {
    const generateToken = async() => {
      if(cart.id && !token) dispatch(createToken(cart.id));
    }
    try {
      generateToken();
    }
    catch (error) {
        console.error(error);
        history.push('/');
    }
  }, [activeStep, dispatch, history, cart.id, token]);

  let Confirmation = () => (
    order ?(
      <>
        <div className={classes.toolbar} />
      <Paper className={classes.confirmationWrapper}>
      <div className={classes.confirmationContainer}>
        <Typography align='center' variant="h5">
          Thank you, {order.customer.firstname}!
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1">Order Reference: #{order.customer_reference}</Typography>
        <Typography variant="subtitle2">The receipt is sent to your email!</Typography>
        <div className={classes.toolbar} />
        <Button className={classes.confirmationBtn} component={Link} variant="outlined" type="button" color="primary" to="/">Back to home</Button>
      </div>
      </Paper>
      <div className={classes.toolbar} />
      </>
    )
    : isFinished ?(
      <>
      <Typography variant="h5">
        Thank you! Wait shortly until we process your order!
      </Typography>
      </>
    ) 
    :(
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )
  )
  if (orderError) {
    Confirmation = () => (
      <>
      <Typography variant="h5">Error: {orderError}</Typography>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    )
  }

  const Form = () => (activeStep === 0
    ? userLocation 
    // if the user has provided their location...
      ? <AddressForm next={next} checkoutToken={token} country={userLocation.country} subdivision={userLocation.subdivision} />
      : <AddressForm next={next} checkoutToken={token} />
    : <PaymentForm next={next} prev={prev} checkoutToken={token} timeout={timeout} />
  )

  const timeout = () => {
    setTimeout(()=>{
      setIsFinished(true);
    }, 3000)
  }

   return (
    <Paper className={classes.paper}>
      <Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel> {label} </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length 
      ?<Confirmation /> 
      : token? <Form /> :
        (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
        ) }
    </Paper>
  )
}

export default CheckOut;
