import {
    Item,
    Status,
    Avatar,
    Name
} from './Friends.styled.jsx';

export const FriendListItem = ({avatar,name,isOnline}) => {
    return (
        <Item>
            <Status>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    )
}