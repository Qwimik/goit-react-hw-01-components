import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsTitle,
  StatsList,
  StatisticsWrapper,
} from 'components/Statistics/Statistics.styled';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = props => {
  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        {props.title && <StatisticsTitle>{props.title}</StatisticsTitle>}

        <StatsList>
          {props.stats.map(({ id, label, percentage }) => {
            return (
              <StatisticsItem key={id} label={label} percentage={percentage} />
            );
          })}
        </StatsList>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
