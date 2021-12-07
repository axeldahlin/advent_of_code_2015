describe("getAmountOfRibbonNeeded", function() {
    const getLengthOfRibbon = require('../lib/day2/day2_part2');
    const fileReader = require('../lib/utils/fileReader');
    const puzzleInput = fileReader("lib/day2/input.txt").split("\n");;
    const correctResult = 3842356;

    it("should get correct amount of ribbon", function() {
        expect(getLengthOfRibbon(puzzleInput)).toEqual(correctResult);
    });
});
