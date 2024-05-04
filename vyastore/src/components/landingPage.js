import React from "react";
import Card from "./Card";

export default function LandingPage() {
  const catogeries = [
    {
      id: 1,
      name: "Shoe",
      price: 4000,
    },
    {
      id: 2,
      name: "T-shirt",
      price: 1500,
    },
    {
      id: 3,
      name: "Pants",
      price: 2300,
    },
    {
      id: 4,
      name: "Glasses",
      price: 500,
    },
    {
      id: 5,
      name: "Hat",
      price: 268,
    },
    {
      id: 6,
      name: "jwellery",
      price: 5000,
    },
  ];
  return (
    <div>
      {catogeries.map((eachItem) => (
        <Card key={eachItem.id} eachItem={eachItem} />
      ))}
    </div>
  );
}
