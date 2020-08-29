import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import styled from 'styled-components';

const Online = styled.span`
  font-size: 30px;
  color: ${props => (props.isOn ? 'green' : 'red')};
`;

function FriendListItem({ avatar, name, id, isOnline }) {
  // const isOnlineClasses = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item} key={id}>
      {/* <span className={isOnlineClasses}>●</span> */}
      <Online isOn={isOnline}>●</Online>
      <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

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
