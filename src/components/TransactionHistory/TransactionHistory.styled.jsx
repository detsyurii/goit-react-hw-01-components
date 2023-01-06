import styled from 'styled-components';
export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  border-radius: 5px;
  background-color: white;
`;
export const Head = styled.thead`
  background-color: turquoise;
  color: white;
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px;
`;

export const HeadItem = styled.th`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
export const TableList = styled.tr`
  :nth-child(2n) {
    background-color: azure;
  }
  :last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
export const TableItem = styled.td`
  text-align: center;
  padding: 10px;
  color: ligh-grey;
  font-size: 18px;
  text-transform: capitalize;
`;
