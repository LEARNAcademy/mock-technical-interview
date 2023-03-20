import React from "react"

const BugBot = ({ userInput }) => {
  const bugFeature = (input) => {
    let response = [
      "it ",
      "is ",
      "not ",
      "a ",
      "bug ",
      "it ",
      "is ",
      "a ",
      "feature "
    ]
    return input
  }

  return <h4>{bugFeature(userInput)}</h4>
}
export default BugBot
