import React from "react";

export default function Card(prop) {
  return (
    <div className="card-main">
      <div className="card-productDetail">
        <h3 className="card-productName">{prop.eachItem.name}</h3>
        <h3 className="card-ProductPrice">{prop.eachItem.price}</h3>
      </div>
      <button className="card-AddCart">Add Cart</button>
      <button className="card-Buy">Buy</button>
    </div>
  );
}
