import React from 'react';
import './TableRow.css';

export const TableRow = ({rowData}) => {
  const {label, value} =  rowData
return (
    <tr>
      <td>{label}</td>
      <td>{parseFloat(value).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}</td>
    </tr>
  )
}

export default TableRow;
