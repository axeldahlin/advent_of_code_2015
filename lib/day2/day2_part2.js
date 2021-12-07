/*
* @param {array} dimensionsOfPresents - array of present dimensions.
*/

function getLengthOfRibbon(dimensionsOfPresents) {
    this.totalRibbonLengthNeeded = 0;
    this.getLengthNeeded = (present) => {
        const presentDimensions = present.split('x').map(present => Number(present));
        const sortedPresentDimensions = presentDimensions.sort((a, b) => a - b);

        const [shortestSide, middleLengthSide, longestSide] = 
        [sortedPresentDimensions[0], sortedPresentDimensions[1], sortedPresentDimensions[2]];

        const shortestDistanceAroundPresent =
            shortestSide 
            + shortestSide
            + middleLengthSide
            + middleLengthSide;

        const lengthNeededForBow =
            shortestSide 
            * middleLengthSide
            * longestSide;
            
        return shortestDistanceAroundPresent + lengthNeededForBow;
    } 

    dimensionsOfPresents.forEach(present => this.totalRibbonLengthNeeded += this.getLengthNeeded(present));

    return this.totalRibbonLengthNeeded;
}

module.exports = getLengthOfRibbon;
