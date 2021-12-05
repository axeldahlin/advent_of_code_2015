function getCorrectFloor(input) {
    var puzzleInputArray = input.split("");
  
    var upOneFloor = puzzleInputArray.filter(
      (instruction) => instruction == "("
    ).length;
  
    var downOneFloor = puzzleInputArray.filter(
      (instruction) => instruction == ")"
    ).length;
  
    return upOneFloor - downOneFloor;
  }
  
  module.exports = getCorrectFloor;
  