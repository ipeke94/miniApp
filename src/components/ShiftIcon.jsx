import React from 'react';

const ShiftIcon = ({el}) => {
  return (
    <li>
    <a target="_blank" href="#/" alt={el.imgAlt}>
      <svg xmlns={el.svgXmlns} viewBox={el.svgViewBox}>
        <path d={el.svgD} />
      </svg>
    </a>
  </li>
  )
}

export default ShiftIcon;