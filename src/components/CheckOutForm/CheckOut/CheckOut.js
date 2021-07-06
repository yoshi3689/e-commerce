import React, { useEffect, useState } from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button,  } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles';

const steps = ['Shipping Address', 'Payment Details']

const CheckOut = ({ cart, onCaptureCheckOut, order, error }) => {
  // console.log(cart, onCaptureCheckOut, order, error);
  //states
  const [activeStep, setActiveStep] = useState(0);
  const [shippingInfo,setShippingInfo ] = useState({})
  const [checkoutToken, setCheckoutToken] = useState(null);
  // cancelling a checkout process if no credit card info is given
  const [isFinished, setIsFinished] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const next = () => setActiveStep(activeStep + 1);
  const prev = () => setActiveStep(activeStep - 1);


  useEffect(() => {
    if(cart) {
      const generateToken = async() => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);
        } catch(error) {
          if(activeStep !== steps.length) {
            history.push('/');
          }
        }
      }
      // the above will be replaced with redux

      generateToken();
    }
  }, [cart, activeStep, history]);

  let Confirmation = () => (order.customer
    ?(
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
        Thank you for your purchase
      </Typography>
      </>
    ) 
    :(
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )
  )
  if (error) {
    Confirmation = () => (
      <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    )
  }

  const Form = () => (activeStep === 0
    ? <AddressForm next={next} checkoutToken={checkoutToken} setShippingInfo={setShippingInfo} test={test} />
    : <PaymentForm next={next} prev={prev} checkoutToken={checkoutToken} shippingInfo={shippingInfo} onCaptureCheckOut={onCaptureCheckOut} timeout={timeout} />
  )

  const test = (newShippingInfo) => {
    console.log(newShippingInfo)
    setShippingInfo(newShippingInfo)
    next()
  }

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
      <div className={classes.toolbar} />
      <main className={classes.layout}>
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
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main> 
    </>
  )
}

export default CheckOut
