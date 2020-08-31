import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.css';

const StatList = ({ followers, views, likes }) => {
  return (
    <ul className={s.stats}>
      <li>
        <span className={s.label}> Followers</span>{' '}
        <span className={s.quantity}>{followers}</span>
      </li>
      <li>
        <span className={s.label}> Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li>
        <span className={s.label}> Likes</span>{' '}
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

StatList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default StatList;
