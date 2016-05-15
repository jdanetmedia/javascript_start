// FUNKTIONER

function sortNumber(a,b) {
    return a - b;
}

function findMin(nyArray) {
    var min = nyArray[0];
    for (var i = 0; i < nyArray.length; i++) {
        if(nyArray[i] < min) {
            min = nyArray[i];
        }
    }
    return min;
}

function findSum(sumArray) {
    var sum = sumArray[0];
    for (var i = 0; i < sumArray.length; i++) {
        sum = sum + sumArray[i];
    }
    return sum;
}

function findMax(maxArray) {
    var max = maxArray[0];
    for (var i = 0; i < maxArray.length; i++) {
        if(maxArray[i] > max) {
            max = maxArray[i];
        }
    }
    return max;
}

function findAverage(mitArray) {
    return (findSum(mitArray) / mitArray.length);
}

// SLUT FUNKTIONER ---------------------------------------

