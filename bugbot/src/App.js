import React, { Component } from 'react'
import BugBot from './components/BugBot'
import bug from './assets/bug.jpeg'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render(){
    let { userInput } = this.state
    return(
      <div>
        <h1>Bug Bot</h1>
        <img
          src={ bug }
          alt="junebug clipart"
        />
        <h3>Enter text here:</h3>
        <input
          onChange={ this.robot }
          value={ userInput }
        />
        <br />
        <div className="outcome">
          <BugBot userInput={ userInput } />
        </div>
      </div>
    )
  }
}

export default App
