import React from 'react';
import './WrongInvoice.css';
import Page from '../../components/page/Page';
import Wrapper from '../../components/wrapper/Wrapper';
import Card from '../../components/card/Card';
import {Typography} from '@material-ui/core'
import Image from '../../components/image/Image';
import yeesh from '../../assets/magic-sprout-yeesh.png'

export const WrongInvoice = () => {
  return(
      <>
      <Card background={'transparent'}>
      <div style={{height: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant={'h2'} align={'center'} style={{filter:'url("#wavy")'}}><b>Uh Oh!</b></Typography>
      <div style={{display: 'flex', justifyContent: 'center'}}><Image src={yeesh} width={'280px'} sx={{margin: '24px 0px',border: '8px solid rgb(235 64 64)', boxSizing: 'border-box', borderRadius: '100%', boxShadow: '0px 0px 0px 8px #ff567b'}} /></div>
        <Typography style={{filter:'url("#wavy")'}} variant={'h5'} align={'center'}><b>This payment link is corrupted or expired</b></Typography>
      </div>
      </Card>
      <svg style={{display: 'none'}}>
        <filter id='wavy'>
          <feTurbulence x="0" y="0" baseFrequency="0.02"
          numOctaves="1" seed="2">
          <animate attributeName='baseFrequency' dur='1s'
          values='0.3;0.5;0.7;0.9' repeatCount='indefinite'></animate>
          </feTurbulence>
          <feDisplacementMap in='SourceGraphic' scale='7'></feDisplacementMap>
          </filter>
      </svg>
      </>
    )
}

export default WrongInvoice
