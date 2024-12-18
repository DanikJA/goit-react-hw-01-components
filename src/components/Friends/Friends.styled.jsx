import styled from 'styled-components';

export const FriendListElement = styled.ul`
  margin-bottom: 100px;
  margin-top: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  list-style: none;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  margin-top: 26px;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 60px;
`;

export const Name = styled.p`
  margin-left: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
`;
