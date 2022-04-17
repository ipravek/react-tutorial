import React, { Component } from 'react'

export default class Clscomponent extends Component {

  constructor (props){
    super(props)
  }

  state = {
    count: 0
  }
  
  render() {

    const style = {
      button: {
        width: 100,
        height: 40,
        fontSize: '1.5rem',
        fontWeight: 'bolder',
        margin: '10px 10px 0 0',
      },

      heading: {
        margin: '20px 0'
      }
    }
    return (
      <>
        <h1 style={style.heading}>Hey, {this.props.data.name}<hr /></h1>
        
        <h3>The Count is {this.state.count} now!</h3>
        <p>
          <button onClick={ ()=>{this.setState({count: this.state.count += 1})}} style={style.button}>+</button>
          <button onClick={ ()=>{this.setState({count: this.state.count -= 1})}} style={style.button}>-</button>
          <button onClick={ ()=>{this.setState({count: this.state.count += 10})}} style={style.button}>+10</button>
          <button onClick={ ()=>{this.setState({count: this.state.count = 0})}} style={style.button}>0</button>
        </p>
      </>
    )
  }
}
