import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

function Transactions({ items }) {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.thead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr
              className={index % 2 === 1 ? styles.grey : styles.white}
              key={item.id}
            >
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
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
