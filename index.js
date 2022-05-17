const returnFirstTwoDrivers = function (names) {
    return [names[0], names[1]];
}

const returnLastTwoDrivers = function(names) {
    return [names[names.length -2], names[names.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (number) {
    return function (multiplier) {
        return multiplier * number;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, thing) {
    if(thing === returnFirstTwoDrivers) {
        return [arrayOfDrivers[0], arrayOfDrivers[1]];
    }
    if(thing === returnLastTwoDrivers) {
        return [arrayOfDrivers[arrayOfDrivers.length -2], arrayOfDrivers[arrayOfDrivers.length-1]];
    }

}

//const selectDifferentDrivers = (names, returnValue) {

//}