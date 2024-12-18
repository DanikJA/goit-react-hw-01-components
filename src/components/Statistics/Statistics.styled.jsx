import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 50px;
  background-color: #e7ecf2;
  border-radius: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0;
  text-transform: uppercase;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const StatList = styled.ul`
  display: flex;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100px;
  align-items: center;
  border-radius: 5px;
`;

export const Label = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 25px;
  margin-top: 5px;
`;
