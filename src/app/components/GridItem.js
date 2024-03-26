// components/GridItem.js
import React from "react";

const GridItem = ({ name, img }) => {
  return (
    <div className="grid-item">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default GridItem;
