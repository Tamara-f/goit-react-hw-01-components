import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ avatar, tag, name, location, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          className={styles.avatar}
          alt="user avatar"
          width="162"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}> Followers</span>{' '}
          <span className={styles.quantity}>
            {stats.followers}
            {stats.followers < 10000 ? ' ' : '☆'}
          </span>
        </li>
        <li>
          <span className={styles.label}> Views</span>
          <span className={styles.quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={styles.label}> Likes</span>{' '}
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

Profile.defaultProps = {
  avatar:
    'https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg',
};
export default Profile;
