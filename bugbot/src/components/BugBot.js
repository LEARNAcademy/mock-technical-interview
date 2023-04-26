import React from "react"

const BugBot = ({ userInput }) => {
  const fromBugToFeature = (input) => {
    const response = [
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

  return <h4>{fromBugToFeature(userInput)}</h4>
}

export default BugBot
