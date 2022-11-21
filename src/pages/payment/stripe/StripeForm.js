import React, {useState} from "react";
import './StripeForm.css'
import {useHistory} from 'react-router-dom';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import {Button, Typography, InputLabel, CircularProgress} from '@material-ui/core'
import { handleStripePayment } from '../../../api';

export const StripeForm = ({name, description, amount, currency, invoiceURL, paymentSuccessful}) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [errMessage, setErrMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
    paymentSuccessful(true)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant={'h5'}>
        Payment Details
      </Typography>
      <br/>
      <InputLabel shrink >Card Number</InputLabel>
      <CardNumberElement />
      <InputLabel shrink>Expiry Date</InputLabel>
      <CardExpiryElement />
      <InputLabel shrink>CVC Code</InputLabel>
      <CardCvcElement />
      { !isLoading &&
        <Button className={'payment-btn'} onClick={handleSubmit} variant={'outlined'}>Pay</Button>
      }
      {
        isLoading &&
        <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div>
      }
      {
        errMessage &&
        <Typography style={{color: '#f00', marginTop: '14px'}} align={'center'} variant={'subtitle2'}>{errMessage}</Typography>
      }
    </form>
  );
};

export default StripeForm;
