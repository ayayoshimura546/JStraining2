// #1 Create an Array with random numbers and check whether all the numbers in the array is odd?

const numbers = [1,2,5,6,16,18,35,65,36,90];

function checkNumberOdd(number){
    if(number % 2 ===0){
        console.log(number+"is not odd number.");
    } else {
        console.log(number+"is odd number");
    }
}

for (let i = 0; i<numbers.length; i++){
    checkNumberOdd(numbers[i]);
}


