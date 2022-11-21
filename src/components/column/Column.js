import React from 'react';
import './Column.css';

export const Column = ({children, cx, mobile, px}) => {
  return (
      <div style={{boxSizing: 'border-box', padding: px ? px : '0'}}
      className={`column ${mobile ? 'mobile-col' : ''} ${cx === 2 ? 'col-6' : ''} ${cx === 3 ? 'col-4' : ''} ${cx === 4 ? 'col-3' : ''}`}>
        {children}
      </div>
  )
}

export default Column;
