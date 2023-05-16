import React from 'react';
import PropTypes from 'prop-types';
import css from './css/FriendList.module.css';


export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.friendListItem} key={id}>
        <span
          className={`${css.status} ${isOnline ? css.online : css.status}`}
        ></span>

        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired
  ),
};
