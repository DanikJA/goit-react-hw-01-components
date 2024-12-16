import {
    StatisticsSection,
    Title,
    StatList,
    Item,
    Label,
    Percentage
} from './Statistics.styled.jsx'


export const Statistics = ({title,stats}) => {
    return (
    <StatisticsSection>
   <Title>{title}</Title>

  <StatList>
    <Item>
      <Label></Label>
      <Percentage></Percentage>
    </Item>
  </StatList>
</StatisticsSection>
)
}