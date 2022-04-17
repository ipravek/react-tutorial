import React from "react";

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const oddStyle = {
  backgroundColor: "red",
  color: "white",
  width: 100,
  height: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 25,
  margin: 10,
  cursor: "crosshair",
};

const evenStyle = {
  backgroundColor: "blue",
  color: "white",
  width: 100,
  height: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 25,
  margin: 10,
  cursor: "crosshair",
};

const primeStyle = {
  backgroundColor: "yellow",
  width: 100,
  height: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 25,
  margin: 10,
  cursor: "crosshair",
};

function Number(props) {
  return (
    <>
      {props.numbers.map((n) => {
        if (isPrime(n)) {
          return <p style={primeStyle}> {n} </p>;
        } else if (n % 2 == 0) {
          return <p style={evenStyle}> {n} </p>;
        } else {
          return <p style={oddStyle}> {n} </p>;
        }
      })}
    </>
  );
}

export default Number;
