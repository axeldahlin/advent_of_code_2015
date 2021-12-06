describe("getCorrectFloor", function() {
    const getPositionOfCharacterThatMakesSantaEnterFloor = require('../lib/day1/day1_part2');
    const instructions = require('../lib/day1/input.json').input;
    const floor = -1;
    const correctIndex = 1783;
  
    it("should get correct floor", function() {
        expect(getPositionOfCharacterThatMakesSantaEnterFloor(instructions, floor)).toEqual(correctIndex);
    });
});
