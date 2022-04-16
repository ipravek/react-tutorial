import React from "react";
import Box from '../box/box'

const detail = {
    margin: '20px 0px',
    minHeight: 500,
    display: 'flex',
    flexWrap: 'wrap',
    justifyConternt: 'center'
};

const liStyle = {
  margin: 10,
  listStyleType: 'none'
}

const Detail = (props) => {
  return (
    <>
      <ul style={detail}>
        {props.numbers.map((num) => (
          <li style={liStyle}>{<Box data={num}/>}</li>
        ))}
      </ul>
    </>
  );
};

export default Detail;
