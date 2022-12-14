function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);;
}

function reverseString(str) {
    const revArray = [];
    const length = str.length - 1;
     
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
     
    return revArray.join('');
}

const calculator = {
    add: (x,y) => x + y, 
    subtract: (x,y) => x - y, 
    divide: (x,y) => x / y,
    multiply: (x,y) => x * y
};

export {capitalize, reverseString, calculator};