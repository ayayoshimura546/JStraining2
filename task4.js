// #4 Create an array with duplicate numbers and filter out the duplicates


const numbers = [2,4,6,5,4,7,9,8,7,6,13];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
