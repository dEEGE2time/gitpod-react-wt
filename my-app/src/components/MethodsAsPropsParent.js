import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethodsAsPropsParent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
    }
  }


  handleSignIn = () => {
    this.setState({
        isLoggedIn: true,
    })
    console.log(this)
  }

  handleLogOut = () => {
    this.setState({
        isLoggedIn: false,
    })
    console.log(this)
  }


  render() {
    return (
      <div>
        <MethodsAsPropsChild
          isLoggedIn={this.state.isLoggedIn}
          handleSignIn={this.handleSignIn}
          handleLogOut={this.handleLogOut}
        />
      </div>
    )
  }
}

export default MethodsAsPropsParent