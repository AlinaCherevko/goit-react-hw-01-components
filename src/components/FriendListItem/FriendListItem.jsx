import React from 'react';
import css from './FriendListItem.module.css';
import cn from 'classnames';

export const FriendListItem = ({ key, avatar, name, isOnline }) => {
  return (
    <li key={key} className={css.item}>
      <span
        className={cn(css.status, isOnline ? css.online : css.offline)}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
