import React from 'react';
import PropTypes from 'prop-types';

import s from './Transactions.module.css';

const Transactions = ({ items }) => {
  return (
    <>
      <table className={s.transactionHistory}>
        <thead>
          <tr className={s.thead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, index) => {
            const trClass = index % 2 === 1 ? s.grey : s.white;
            return (
              <tr className={trClass} key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
