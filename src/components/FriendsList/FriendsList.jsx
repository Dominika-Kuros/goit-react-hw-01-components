import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
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
