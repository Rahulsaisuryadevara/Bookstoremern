import React, { Component } from 'react'

export class Message0 extends Component {
    constructor() {
      super()
    
      this.state = {
         message : 'Welcome to  Visitor'
      }
    }
    changeMessage(){
        this.setState({
            message : 'thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
        <center>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </center>
      </div>
    )
  }
}

export default Message0