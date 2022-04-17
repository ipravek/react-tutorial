import React from "react";
import Button from "../buttton/Button";

const card = {
  border: "1px solid black",
  padding: "10px",
  marginTop: "20px",
};

const bar = {
  borderBottom: "1px solid black",
  margin: "10px 0",
};

const buttonInfo = () => {
  alert("Heyy");
};

export const Card = (props) => {
  return (
    <div>
      <div className="card" style={card}>
        <h1>{props.data.title}</h1>
        <div className="bar" style={bar}></div>
        <h4>{props.data.welcome}</h4>
        <p>{props.data.body}</p>
        <p>
          <ul style={{listStyleType: 'none', display: 'flex', gap: 20, margin: '10px 0'}}>
            {props.data.numbers.map((x) =>
              <li>{x}</li>
            )}
          </ul>
        </p>
        <p>
          <Button name="Click Me" onClick={buttonInfo} />
        </p>
      </div>
    </div>
  );
};
