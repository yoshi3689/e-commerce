import React, { useEffect, useState } from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button,  } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles';
import { createToken } from '../../../redux';
// import withFetchUserLocation from '../../HOC/withFetchUserLocation';

const steps = ['Shipping Address', 'Payment Details']

const CheckOut = ({ userLocation }) => {
  // console.log(userLocation)
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
    //execute the statements in the try block first. 
    //Then if any error occurs in side it, the following catch block is executed utilizing that error thrown as the argument
    try {
      generateToken();
    }
    catch (error) {
      /* when the page is reloaded after the checkout, this token creation returns an error, so simply force the user back to the home upon error is good enough*/
        console.error(error);
        history.push('/');
    }
  }, [activeStep, dispatch, history, cart.id, token]);

  let Confirmation = () => (
    order ?(
      <>
      <div>
      <Typography variant="h5">
        Thank you, {order.customer.firstname}!
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="subtitle2">Order Reference: #{order.customer_reference}</Typography>
      <Typography variant="subtitle2">Your order summary is sent to your email!</Typography>
      </div>
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
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
    ? 
      userLocation 
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
  //error: can't perform an update on component

   return (
    <>
      <CssBaseline />
      {/* the above is for resetting default margin and padding for this component*/}

        <Paper className={classes.paper}>
        {/* the above sheds a nice shadowy bg for an item coomes on top of it */}
          <Typography variant="h4" align="center"> Checkout </Typography>
          {/* align in Typography is the same as text-align */}
          <Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
            {/* alternativeLabel prop sets the label below the step icon  */}
            {/* activeStep=0 -> 1, 1 -> 2(on the UI) */}
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
    </>
  )
}

export default CheckOut;
