import React from 'react';

const Icon = ({el}) => {
    return (<li>
        <img src={el.src} alt={el.alt} />
    </li>)
}

export default Icon