import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.css';

const Profile = ({ avatar, tag, name, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} className={s.avatar} alt="user avatar" width="162" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}> Followers</span>{' '}
          <span className={s.quantity}>
            {stats.followers}
            {stats.followers < 10000 ? ' ' : '☆'}
          </span>
        </li>
        <li>
          <span className={s.label}> Views</span>
          <span className={s.quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={s.label}> Likes</span>{' '}
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

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
