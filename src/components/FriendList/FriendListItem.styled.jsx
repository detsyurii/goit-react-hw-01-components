import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  border: 2px solid lightgrey;
  padding: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  display: block;
  width: 75px;
`;

export const Name = styled.p`
  font-size: 24px;
`;
