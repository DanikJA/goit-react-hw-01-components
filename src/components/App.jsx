import {Profile} from './Profile/Profile';
import user from './Data/user.json'

import { Statistics } from './Statistics/Statistics';
import data from './Data/data.json';

import { FriendList } from './Friends/Friends';
import friends from './Data/friends.json';
  
  
export const App = () => {
  return (
    <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
  <Statistics title="Upload stats" stats={data} />
      
  <FriendList friends={friends}/>
  </div>
  )
};

