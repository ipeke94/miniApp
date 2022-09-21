import React from "react";
import food1 from "../images/food1.png";
import food2 from "../images/food2.png";

const ContainerCard = () => {
  return (
    <ul className="container-cards">
      <li>
        <div className="container-card-wrapper">
          <img src={food1} alt="profile1" />
          <a target="_blank" href="#/" alt="Date">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
            </svg>
          </a>
        </div>
        <div name="food-name-wrapper">
          <span className="food-name">Classic Bruschetto</span>
          <span className="food-quantity">x1</span>
        </div>
        <p>4:36</p>
        <button className="ready-btn">Ready</button>
        <button className="tech-card-btn">Add to Tech Card</button>
      </li>
      <li>
        <div className="container-card-wrapper">
          <img src={food2} alt="profile2" />
          <a target="_blank" href="#/" alt="Date">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
            </svg>
          </a>
        </div>
        <div name="food-name-wrapper">
          <span className="food-name">Mashed Aragula</span>
          <span className="food-quantity">x2</span>
        </div>
        <p>2:24</p>
        <button className="ready-btn">Ready</button>
        <button className="tech-card-btn">Add to Tech Card</button>
      </li>
    </ul>
  );
};

export default ContainerCard;
