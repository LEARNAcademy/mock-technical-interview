// ---------- Code Challenge 2:

describe("removeLastLetter", () => {
  it("takes in an array of strings and returns an array with the last letter removed from each string", () => {
    expect(removeLastLetter(["Luigi", "Peach", "Toad", "Yoshi"])).toEqual(["Luig", "Peac", "Toa", "Yosh"])
    expect(removeLastLetter(["Inky", "Blinky", "Pinky", "Clyde"])).toEqual(["Ink", "Blink", "Pink", "Clyd"])
  })
})

function removeLastLetter(stringOfWords){

}
