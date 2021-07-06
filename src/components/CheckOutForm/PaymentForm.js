import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';

import Review from './Review'
import { publicKeyForStripe } from '../../lib/commerce'

const stripePromise = loadStripe(publicKeyForStripe);
const styles = {
  s1: { margin: '20px 0' },
  s2: { display: 'flex', justifyContent: 'space-between' }
}

const PaymentForm = ({ next, prev, checkoutToken, shippingInfo, onCaptureCheckOut, timeout }) => {

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    
    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    if(error) {
      console.log(error);
    } else {
      const orderInfo = {
        line_item: checkoutToken.live.line_items,
        customer: { 
          firstname: shippingInfo.firstName, 
          lastname: shippingInfo.firstName, 
          email: shippingInfo.email 
        },
        shipping: { 
          name: 'International', 
          street: shippingInfo.address1, 
          town_city: shippingInfo.city, 
          county_state: shippingInfo.shippingSubdivision, 
          postal_zip_code: shippingInfo.zip, 
          country: shippingInfo.shippingCountry 
        },
        fulfillment: { shipping_method: shippingInfo.shippingOption },

        //the below is about the stripe
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckOut(checkoutToken.id, orderInfo);

      timeout();

      next();
    }
  }

  console.log(checkoutToken, shippingInfo);
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={styles.s1} > Payment method </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {/* inside the Consumer, we create a callback that returns a chunk of elements using the value passed to it */}
          {({ elements, stripe }) => (
            <form onSubmit={(e) =>{console.log(e, elements, stripe); handleSubmit(e ,elements, stripe);}} >
              <CardElement />
              <br /> <br />
              <div style={styles.s2}>
                <Button variant="outlined" onClick={prev}>Back</Button>
                <Button type="submit" variant="contained" disabled={!stripe} color="primary"> Pay { checkoutToken.live.subtotal.formatted_with_symbol } </Button>
              </div>
            </form>
          )
          }
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm
