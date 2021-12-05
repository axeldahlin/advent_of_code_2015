describe("getCorrectFloor", function() {
    var getCorrectFloor = require('../lib/day1/day1_part1');
    var input = require('../lib/day1/input.json').input;
    const correctFloor = 232;
   
    it("should get correct floor", function() {
        expect(getCorrectFloor(input)).toEqual(correctFloor);
    });
});
