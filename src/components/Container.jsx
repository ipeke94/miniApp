import React, { useState, useEffect } from "react";
import containerPhoto from "../images/containerPhoto.png";
import ContainerCard from "./ContainerCard";

const Container = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="container">
      <p className="date-text">{date.toLocaleDateString()}</p>
      <p className="time-text">{date.toLocaleTimeString()}</p>
      <img className="container-photo" src={containerPhoto} alt="containerPhoto"></img>
      <ContainerCard />
    </div>
  );
};

export default Container;
