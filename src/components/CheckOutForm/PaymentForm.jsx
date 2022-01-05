import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  ElementsConsumer,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";

import Review from "./Review";
import { createPayment, createOrder, refreshCart } from "../../redux";

const stripePromise = loadStripe(process.env.REACT_APP_SPRITE_API_KEY_PUBLIC);
const styles = {
  s1: { margin: "20px 0" },
  s2: { display: "flex", justifyContent: "space-between" },
};

const PaymentForm = ({ next, prev, checkoutToken, timeout }) => {
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.shipping);
  document.addEventListener("focus", (e) => {
    console.log(e.target);
  })

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);

    const { payload, error } = await dispatch(
      createPayment({ stripe, cardElement })
    );
    if (error) {
      console.error(error);
    } else {
      const fullName = shippingInfo.firstName + " " + shippingInfo.lastName;
      const orderInfo = {
        line_item: checkoutToken.live.line_items,
        customer: {
          firstname: shippingInfo.firstName,
          lastname: shippingInfo.lastName,
          email: shippingInfo.email,
        },
        shipping: {
          name: fullName,
          street: shippingInfo.address1,
          town_city: shippingInfo.city,
          county_state: shippingInfo.shippingSubDivision,
          postal_zip_code: shippingInfo.zip,
          country: shippingInfo.shippingCountry,
        },
        fulfillment: { shipping_method: shippingInfo.shippingOption },
        billing: {
          name: fullName,
          street: shippingInfo.address1,
          town_city: shippingInfo.city,
          county_state: shippingInfo.shippingSubDivision,
          postal_zip_code: shippingInfo.zip,
          country: shippingInfo.shippingCountry,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: payload.id,
          },
        },
      };

      dispatch(createOrder({ id: checkoutToken.id, orderInfo }));

      timeout();

      refreshCart();

      next();
    }
  };

  return (
    <>
    
      {/* <button id="auto-fill" onClick={autofill} >Autofill card number</button> */}
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={styles.s1}>
        {" "}
        Payment method{" "}
      </Typography>
      {shippingInfo && (
        <Elements stripe={stripePromise}>
          {/* here the stripe promise tuns into a var, stripe */}
          <ElementsConsumer>
            {/* inside the Consumer, we create a callback that returns a chunk of elements using the value passed to it */}
            {({ elements, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br /> <br />
                <div style={styles.s2}>
                  <Button variant="outlined" onClick={prev}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!stripe}
                    color="primary"
                  >
                    {" "}
                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}{" "}
                  </Button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      )}
    </>
  );
};

export default PaymentForm;
