import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, id, isOnline }) => {
  const isOnlineClasses = isOnline ? s.online : s.offline;

  return (
    <li className={s.item} key={id}>
      <span className={isOnlineClasses}>●</span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
FriendListItem.defaultProps = {
  avatar:
    'https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg',
};
export default FriendListItem;
