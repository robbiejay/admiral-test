import React from 'react';
import './Page.css';

export const Page = ({children, background}) => {
  return(
    <>
    <div className='page-wrapper' style={{background: background}}>
      {children}
    </div>
    </>
  )
}

export default Page;
