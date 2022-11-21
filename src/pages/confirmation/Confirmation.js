import React from 'react';
import './Confirmation.css';
import Page from '../../components/page/Page';
import Wrapper from '../../components/wrapper/Wrapper';
import Card from '../../components/card/Card';
import {Typography} from '@material-ui/core'
import Image from '../../components/image/Image';
import {format, parseISO} from 'date-fns'


export const Confirmation = ({invoice}) => {
  return(
      <>
        <div style={{height: '87.5vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Card width={'420px'} boxShadow={'0px 0px 0px 16px #151a4faa'} border={'8px solid #151a4f'}>
              <Typography variant={'h2'} align={'center'} style={{position: 'relative', zIndex: '8', color: '#151a4f'}}><b>Thank you!</b></Typography>
              <Typography variant={'h6'} align={'center'}><b>Your payment has been confirmed</b></Typography>

              <Typography variant={'subtitle2'} align={'center'}>Thank you for your payment</Typography>
            </Card>
          </div>
        </div>
      </>
    )
}

export default Confirmation
