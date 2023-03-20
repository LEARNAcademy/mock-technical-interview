import React, { useState } from "react"
import BugBot from "./components/BugBot"
import bug from "./assets/bug.jpeg"
import "./App.css"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const robot = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Bug Bot</h1>
      <img src={bug} alt="junebug clipart" />
      <h3>Enter text here:</h3>
      <input onChange={robot} value={userInput} />
      <br />
      <div className="outcome">
        <BugBot userInput={userInput} />
      </div>
    </>
  )
}

export default App
