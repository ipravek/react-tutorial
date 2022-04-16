import React from 'react'

export default function Button(props) {

  const button = {
    padding: '5px',
    margin: '3px 0px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer'
  }

  return (
    <div>
      <button onClick={props.onClick} style={button}>{props.name}</button>
    </div>
  )
}
