import {
    StatisticsSection,
    Title,
    StatList,
    Item,
    Label,
    Percentage
} from './Statistics.styled.jsx';


export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            <Title>{title}</Title>

            <StatList>
                {stats.map(stat => {
                    return (
                        <Item key={stat.id}>
                            <Label>{stat.label}</Label>
                            <Percentage>{stat.percentage}</Percentage>
                        </Item>
                    );
                })};
            </StatList>
        </StatisticsSection>
    )
};

  