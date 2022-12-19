import React, { useContext } from 'react';
import AuthContext from '../../store/Auth-context';

import classes from './Card.module.css';

const Card = (props) => {

  const {isDay} = useContext(AuthContext)

  return (
    <div className={`${isDay ? classes.night : classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
