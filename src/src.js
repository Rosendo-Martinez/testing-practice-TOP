const calculator = {
    add: (x,y) => x + y, 
    subtract: (x,y) => x - y, 
    divide: (x,y) => x / y,
    multiply: (x,y) => x * y
};

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}

function reverseString(str) {
    const revArray = [];
    const length = str.length - 1;
     
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
     
    return revArray.join('');
}

function analyzeArray(arr) {
    let sum = arr[0];
    let min = arr[0];
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        min = min < arr[i] ? min : arr[i];
        max = max > arr[i] ? max : arr[i];
    }

    return {
        average: sum/arr.length, 
        min, 
        max, 
        length: arr.length
    };
}

export {calculator, capitalize, reverseString, analyzeArray};