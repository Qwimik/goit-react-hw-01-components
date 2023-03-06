import {
  StatsItem,
  StatsLabel,
  StatsPersent,
} from 'components/StatisticsItem/StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatsItem>
      <StatsLabel>{label}</StatsLabel>
      <StatsPersent>{percentage}%</StatsPersent>
    </StatsItem>
  );
};
