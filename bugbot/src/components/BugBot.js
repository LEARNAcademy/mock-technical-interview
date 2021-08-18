import React, { Component } from 'react'

class BugBot extends Component {

  bugFeature = (input) => {
    let response = ["it", "is", "not", "a", "bug", "it", "is", "a", "feature"]
  }

  render() {
    const {userInput} = this.props
    return (
      <>
        <h4>{this.bugFeature(userInput)}</h4>
      </>
    )
  }
}
export default BugBot
