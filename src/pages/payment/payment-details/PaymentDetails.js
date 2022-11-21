import React from 'react'
import './PaymentDetails.css'
import {Typography} from '@material-ui/core'
import Image from '../../../components/image/Image';
import Table from '../../../components/table/Table';
import Column from '../../../components/column/Column';
import Card from '../../../components/card/Card';
// import pose3 from '../../../assets/pose-3.png';
export const PaymentDetails = ({paymentData, paymentTotal}) => {
  return(
  <>
  <Card boxShadow={'0px 3px 4px 0px #b092beaa'}>
    <Typography variant={'h5'}>
      Order Details
    </Typography>
    <Table tableData={paymentData}/>
    <hr/>
    <Typography variant={'h5'}>Total Price: {parseFloat(paymentTotal).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}</Typography>
  </Card>
  </>
)
}

export default PaymentDetails
