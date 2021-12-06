describe("fileReader", function() {
    const fileReader = require('../../lib/utils/fileReader');

    const result = fileReader("/spec/fileReader/input.txt");
    const expectedResult = "This is an input file for testing!";

  
    it("should should get text from txt file", function() {
        expect(result).toEqual(expectedResult);
    });
});
