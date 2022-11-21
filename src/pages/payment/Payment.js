import React, {useState,useEffect, useContext} from 'react';
import './Payment.css';
import Confirmation from '../confirmation/Confirmation'
import Page from '../../components/page/Page';
import Wrapper from '../../components/wrapper/Wrapper';
import Column from '../../components/column/Column';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import PaymentDetails from './payment-details/PaymentDetails'
import Stripe from './stripe/StripeContainer';
import { Typography, Button } from '@material-ui/core'
import { checkPaymentLink } from '../../api';
import Image from '../../components/image/Image';
import logo from '../../assets/admiral-logo.jpg'
import modalContext from "../../context/ModalContext";
import { useHistory, Link} from "react-router-dom";


export const Payment = ({location}) => {

  const [invoice, setInvoice] = useState(null);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false)
  const [wrongInvoice, setWrongInvoice] = useState(false)
  const [invoiceAlreadyPaid, setInvoiceAlreadyPaid] = useState(false)
  const [returnedInvoice, setReturnedInvoice] = useState(null)
  const [returnedCustomer, setReturnedCustomer] = useState(null)
  const [returnedTeacher, setReturnedTeacher] = useState(null)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [price, setPrice] = useState(null);
  const history = useHistory();

  const CURRENCY = 'GBP'

  useEffect(() => {
    // setInvoice(PAYMENT_DATA)
    getPayment()
  }, [])

function getPayment() {
  return checkPaymentLink(location.pathname.substring(1))
    .then(result => {
      console.log(result[0])
      setPrice(result[0].price)
      setInvoice(result[0].rows)
    })
}

// function checkPayment() {
//     return checkPaymentLink(location.pathname.substring(1))
//     .then(result => {
//       console.log(result);
//       if(result.invoice) {
//         console.log(result.invoice);
//         if(result.invoice.paymentReceived) {
//           setInvoiceAlreadyPaid(true)
//         } else {
//           setInvoice(result.invoice)
//         }
//       }
//     }).catch(err => {
//       console.log(err);
//     })
//   }

  const handlePaymentSuccessful = (bool, returnedValue) => {
    setPaymentSuccessful(bool)
    console.log(invoice)
    setPaymentModalOpen(false);
    setReturnedInvoice(invoice)
  }

  const handleClose = () => {
    setPaymentModalOpen(false);
  }

  const goToPayment = () => {
      history.push(`/3f0TEST309`);
  }


  return (
    <>
    <Page>
      <Wrapper>
        { !invoice &&
          <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'height': '100vh'}}>
            <Button onClick={goToPayment} className='payment-btn' variant={'outlined'}>Go To Payment</Button>
          </div>
        }
        { invoice && !invoiceAlreadyPaid && !paymentSuccessful && !wrongInvoice &&
          <>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '100%', maxWidth: '520px'}}>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Image src={logo} width={'180px'} />
              </div>
              <PaymentDetails
                paymentData={invoice}
                paymentTotal={price}
              />
              <div style={{"padding": "21px"}}>
              <Button onClick={() => setPaymentModalOpen(true)} variant={'outlined'} className='payment-btn'>Pay Now</Button>
              </div>
            </div>
          </div>
          </>
        }
        {
          paymentSuccessful &&
          <Confirmation invoice={returnedInvoice} customer={returnedCustomer} teacher={returnedTeacher} />
        }
      </Wrapper>
    </Page>
    <Modal open={paymentModalOpen} onClose={handleClose} component={<Stripe
          name={'Admiral Test'}
          description={'Admiral Application Test'}
          amount={parseInt(price)}
          currency={CURRENCY}
          invoiceURL={location.pathname.substring(1)}
          paymentSuccessful={(e, r) => handlePaymentSuccessful(e, r)}
          />}>

    </Modal>
    </>
  )
}

export default Payment;
