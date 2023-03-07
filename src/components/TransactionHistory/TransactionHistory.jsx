import PropTypes from 'prop-types';

import { TransactionTableRow } from 'components/TransactionTableRow/TransactionTableRow';

import {
  TransContainer,
  TransTable,
  TransThead,
  TransTr,
  TransTh,
  TransTbody,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransContainer>
      <TransTable>
        <TransThead>
          <TransTr>
            <TransTh>Type</TransTh>
            <TransTh>Amount</TransTh>
            <TransTh>Currency</TransTh>
          </TransTr>
        </TransThead>

        <TransTbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TransactionTableRow
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </TransTbody>
      </TransTable>
    </TransContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
