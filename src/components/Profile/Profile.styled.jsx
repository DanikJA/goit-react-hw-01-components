import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 330px;
  margin-left: auto;
  margin-right:auto;
  margin-top:100px;
  padding: 50px 50px;
  background-color: #e7ecf2;
  border-radius: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);

`;

export const Avatar = styled.img`
 width:100px;
 display: block;
 margin-left: auto;
 margin-right:auto;
 border-radius: 50%;
`;

export const Description = styled.div`
background-color:white;
padding: 30px;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`;

export const Name = styled.p`
display:block;
text-align:center;
font-size:20px;
font-weight:600;

`;
export const Tag = styled.p`
 margin-top:0;
 display:block;
 text-align: center;
 color: darkgrey;
`;

export const Location = styled.p`
margin: 0;
display:block;
text-align: center;
color: darkgrey;
`;

export const Stats = styled.ul`
display:flex;
justify-content:space-between;
margin:0;
padding:30px;
background-color: gainsboro;
height:100px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1px;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;
