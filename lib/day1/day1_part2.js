function getPositionOfCharacterThatMakesSantaEnterFloor(instruction, floor) {
    const puzzleInstructionArray = instruction.split("");

    let currentFloor = 0;
    let index = 0;

    while(currentFloor !== floor){
        if (puzzleInstructionArray[index] === '(') {
            currentFloor++;
        } else {
            currentFloor--;
        }
            index++;
    } 
    
    return index;
}
  
module.exports = getPositionOfCharacterThatMakesSantaEnterFloor;
  