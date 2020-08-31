import React from 'react';
import PropTypes from 'prop-types';

import StatList from './StatList';
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
      <StatList {...stats} />
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
