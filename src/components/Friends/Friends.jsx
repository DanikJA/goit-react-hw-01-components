import { FriendListItem } from './FriendListItem';
import { FriendListElement } from './Friends.styled.jsx';

export const FriendList = ({ friends }) => {
  return (
    <FriendListElement>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListElement>
  );
};
