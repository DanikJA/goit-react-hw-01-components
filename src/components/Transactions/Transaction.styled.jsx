import styled from 'styled-components';

export const TransactionHistoryElement = styled.table`
    width:700px;
    border: 2px solid black;
    margin: 60px auto;
    padding: 10px;
    border-collapse: collapse;

    & th,
    & td{
         padding: 10px;
         text-align: center;
         border-bottom: 1px solid black;
    }

    & th {
      color: white;
      background-color: #05bcd5;
      font-weight: bold;
      border: 1px solid black;

    }

    & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

   & td {
    border: 1px solid black;
  }
`