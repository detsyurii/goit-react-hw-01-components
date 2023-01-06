import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: auto;
  padding: 50px;
  width: 300px;
  background-color: lightgray;
`;

export const Description = styled.div`
  padding: 25px;
  background: white;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  display: block;
  margin: auto;
  width: 100px;
  border-radius: 50px;
  padding: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  margin: auto;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: grey;
  margin: auto;
  padding: 10px;
`;

export const Location = styled.p`
  color: grey;
  margin: auto;
  padding: 10px;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
export const Item = styled.li`
  width: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: azure;
  border: 1px solid lightgrey;
`;

export const Label = styled.span`
  margin: auto;
  padding-bottom: 10px;
`;

export const Quantity = styled.span`
  margin: auto;
  font-size: 18px;
  font-style: bold;
`;
