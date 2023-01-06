import PropTypes from 'prop-types';
import {
  StatisticsWrap,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
    return (
      <StatisticsWrap>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(({ id, label, percentage }, index) => (
            <Item key={id} index={index}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </StatisticsWrap>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};