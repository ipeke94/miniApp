import React from 'react';
import {profileArr} from "../constants/profile";
import Icon from "./Icon";

const Icons = () => {
    return (
        <ul className="shift-icons-wrapper">
        { profileArr.map(el => {
            return <Icon el={el}/>
        })}
        </ul>
    )
}

export default Icons;