import styled from 'styled-components';

export const StatisticsWrap = styled.section`
  margin: auto;
  margin-top: 10px;
  padding: 50px;
  width: 300px;
  background-color: lightgray;
`;

export const Title = styled.h2`
  padding: 25px;
  background-color: white;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  padding: 0;
`;

function getRandomHexColor(index) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  width: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => getRandomHexColor(props.index)};
  border: 1px solid lightgrey;
`;

export const Label = styled.span`
  margin: auto;
  padding-bottom: 10px;
`;

export const Percentage = styled.span`
  margin: auto;
  font-size: 18px;
`;