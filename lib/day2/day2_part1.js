/*
* @param {array} dimensionsOfPresents - array of present dimensions.
*/

function getAmountOfWrappingPaper(dimensionsOfPresents) {
    this.totalAreaNeeded = 0;
    this.getAreaNeeded = (present) => {
        const dimensionsArray = present.split('x');
        const [length, width, height] = [Number(dimensionsArray[0]), Number(dimensionsArray[1]), Number(dimensionsArray[2])]
        
        const side1 = length * width;
        const side2 = width * height;
        const side3 = length * height;

        const smallestSide = Math.min(side1, side2, side3);
        
        return result = side1 * 2 
            + side2 * 2
            + side3 * 2
            + smallestSide;
    } 

    dimensionsOfPresents.forEach(present => this.totalAreaNeeded += this.getAreaNeeded(present));

    return this.totalAreaNeeded;
}

module.exports = getAmountOfWrappingPaper;
