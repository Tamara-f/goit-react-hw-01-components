import React from 'react';
import FriendListItem from './FriendListItem';

import s from './FriendList.module.css';

const FriendList = props => {
  return (
    <ul className={s.friendList}>
      {props.friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          id={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
export default FriendList;
