import React from 'react'

const boxStyle = {
  width: 100,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 30,
  fontWeight: 'bolder',
  border: '2px solid grey',
  borderRadius: 4
}

function box(props) {
  return (
    <>
      <div className="box" style={boxStyle}>
        {props.data}
      </div>
    </>
  )
}

export default box