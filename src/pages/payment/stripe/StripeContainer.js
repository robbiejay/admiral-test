import React from 'react'
import StripeForm from './StripeForm';
import Card from '../../../components/card/Card';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Typography} from '@material-ui/core';
const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const Stripe = ({ name, description, amount, currency, invoiceURL, paymentSuccessful }) => {

  const handlePaymentSuccessful = (bool, returnedValue) => {
    paymentSuccessful(bool, returnedValue)
  }
return(
<Card boxShadow={'0px 3px 4px 0px #b092beaa'}>
<Elements stripe={stripePromise}>
  <StripeForm name={name} description={description} amount={amount} currency={currency} invoiceURL={invoiceURL} paymentSuccessful={(e, r) => handlePaymentSuccessful(e, r)}/>
</Elements>
</Card>
)
}
export default Stripe;
