import React from 'react'

const nav = {
  height: '50px',
  backgroundColor: '#0b0b0b',
  color: 'white',    
  display: 'flex',
}

const logo = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  cursor: 'pointer'
}

export const Nav = () => {
  return (
    <div>
      <nav style={nav}>
        <div className="logo" style={logo}>
          React Tutorial
        </div>
      </nav>
    </div>
  )
}
