import React from 'react';
import './Table.css';
import TableRow from './table-row/TableRow';

export const Table = ({tableData}) => {
return (
  <table class='payment-details'>
    {tableData.map((row) => {
      return (
        <TableRow rowData={row} />
      )
    })
    }
  </table>
  )
}

export default Table
