//Factorial of a number
function factorial(number){
    if (number === 1) {
        return number;
    } else{
        return number * factorial(number - 1);
    }
}

console.log('Factorial of 5 is: ' + factorial(5));

//Sum of an array of numbers
function sum(arrayOfNumbers) {
    if (arrayOfNumbers.length === 1) {
        return arrayOfNumbers[0];
    } else{
        return sum(arrayOfNumbers.splice(1, arrayOfNumbers.length)) + arrayOfNumbers[0];
    }
}

console.log('Sum of array of numbers is: ' + sum([1,2,3]));

//Exponent of a number
function exponent(base, expo) {
    if (expo === 1) {
        return base;
    } else{
        return base * exponent(base, expo -= 1);
    }
}

console.log('Exponent of a number is: ' + exponent(8,2));

//Reverse a string
function reverse(string) {
    if (string.length === 1) {
        return string;
    } else{
        return reverse(string.substr(1, string.length)) + string[0];
    }
}

console.log('Reverse of a string is: ' + reverse('string'));

//Reverse an array
function reverseArray(array) {
    if (array.length === 1) {
        return array;
    } else{
        return reverseArray(array.splice(1, array.length)) + array[0];
    }
}

console.log('Reverse of an array is: ' + reverseArray(['a','r','r','a','y']));

//Create an array from a given value and length
function buildArray(value, length) {
    if (length === 1) {
        return value;
    } else{
        return [value].concat(buildArray(value, length -= 1));
    }
}

console.log('Array made from value and length parameters is: ' + buildArray(2,3));