import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

function FriendList(props) {
  return (
    <ul className={styles.friendList}>
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
}
export default FriendList;
