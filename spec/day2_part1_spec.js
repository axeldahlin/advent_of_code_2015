describe("getAmountOfWrappingPaper", function() {
    const getAmountOfWrappingPaper = require('../lib/day2/day2_part1');
    const fileReader = require('../lib/utils/fileReader');
    const puzzleInput = fileReader("lib/day2/input.txt").split("\n");
    const correctResult = 1606483;

    it("should get correct amount square feet of wrapping paper", function() {
        expect(getAmountOfWrappingPaper(puzzleInput)).toEqual(correctResult);
    });
});
