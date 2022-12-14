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

export {capitalize, reverseString};