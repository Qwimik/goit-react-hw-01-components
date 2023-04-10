import {
  StatsItem,
  StatsLabel,
  StatsPersent,
} from 'components/StatisticsItem/StatisticsItem.styled';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatsItem>
      <StatsLabel>{label}</StatsLabel>
      <StatsPersent>{percentage}%</StatsPersent>
    </StatsItem>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
