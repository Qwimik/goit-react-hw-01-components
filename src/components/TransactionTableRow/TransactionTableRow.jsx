import PropTypes from 'prop-types';

import {
  TransTr,
  TransTd,
} from 'components/TransactionTableRow/TransactionTableRow.styled';

export const TransactionTableRow = ({ type, amount, currency }) => {
  return (
    <TransTr>
      <TransTd>{type}</TransTd>
      <TransTd>{amount}</TransTd>
      <TransTd>{currency}</TransTd>
    </TransTr>
  );
};

TransactionTableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
