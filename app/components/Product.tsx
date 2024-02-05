"use client";
import React, { useState } from "react";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("asd ", isOpen);
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-96 h-60 bg-lime-600">
      product
      <button onClick={() => setIsOpen(true)}>details</button>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
};

export default Product;
