import React from 'react';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactionsData }) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Тип</th>
          <th>Сума</th>
          <th>Валюта</th>
        </tr>
      </thead>
      <tbody>
        {transactionsData.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
