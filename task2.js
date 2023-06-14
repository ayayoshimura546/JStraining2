// #2 Create an Array with random numbers and check whether all the numbers in the array is even?

const numbers = [1,14,16,18,40,68,99];
function checkNumberEven(number){
    if(number % 2 ===0){
        console.log(number+"is even number.");
    } else {
        console.log(number+"is not even number");
    }
}

for (let i = 0; i<numbers.length; i++){
    checkNumberEven(numbers[i]);
}