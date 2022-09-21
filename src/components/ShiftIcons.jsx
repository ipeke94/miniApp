import React from 'react';
import {iconArr} from "../constants/icon";
import ShiftIcon from './ShiftIcon';


const ShiftIcons = () => {
  return (
    <ul className="shift-icons-wrapper-second">
    { iconArr.map(el => <ShiftIcon el={el}/>)}
    </ul>
  )
}

export default ShiftIcons;