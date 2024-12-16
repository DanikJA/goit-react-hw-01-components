import {
    Wrapper,
    Avatar,
    Description,
    Name,
    Tag,
    Location,
    Stats,
    List,
    Label,
    Quantity,

} from './Profile.styled.jsx';


export function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (
        <Wrapper>
            <Description>
                <Avatar  src={avatar} alt="User avatar"/>
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
             </Description>

            <Stats>
                <List>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </List>
                <List>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </List>
                <List>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </List>
            </Stats>
        </Wrapper>
    );
}



