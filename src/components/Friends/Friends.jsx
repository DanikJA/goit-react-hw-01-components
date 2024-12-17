import { FriendListItem } from './FriendListItem';
import {
    FriendListElement
} from './Friends.styled.jsx';

export const FriendList = ({ friends }) => {
    return (
    <FriendListElement>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                key={id}    
                avatar={avatar}
                name={name}   
                isOnline={isOnline}    
             />
         ))}   
     </FriendListElement>
    )
}



















































































//  export const FriendList = ({friends}) => {
//  return(
//      <ul>
//          {friends.map(({ avatar, name, isOnline, id }) => (
//              <FriendListItem
//                  key={id}
//                  avatar={avatar}
//                  name={name}
//                  isOnline={isOnline}
//              />
//          ))}
//     </ul>
//     )}

// export const FriendListItem = ({avatar,name,isOnline}) => {
//     return (
//      <li className="item">
//         <span className="status">{isOnline}</span>
//         <img className="avatar" src={avatar} alt="User avatar" width="48" />
//         <p className="name">{name}</p>
//     </li>
//     )
//    }
     
