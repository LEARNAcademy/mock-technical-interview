// ---------- Code Challenge 1:

describe("isAnagram", () => {
  it("takes two strings and returns either true or false depending on whether they're anagrams or not", () => {
    expect(isAnagram("cristian", "Cristina")).toEqual(true)
    expect(isAnagram("Conversation", "Voices rant on")).toEqual(true)
    expect(isAnagram("Dormitory", "dirty room")).toEqual(true)
    expect(isAnagram("nope", "note")).toEqual(false)
    expect(isAnagram("Apple at", "Appeal")).toEqual(false)
  })
})

function isAnagram(s1, s2){

}
