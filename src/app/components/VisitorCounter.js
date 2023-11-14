"use client";
import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/counter", { method: "POST" })
      .then((response) => response.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div>
      <p className="my-7">Visitor Count: {count}</p>
    </div>
  );
};

export default VisitorCounter;
