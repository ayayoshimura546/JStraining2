// #6 Write a regular expression to check whether a word has combination of alteast one letter,number and a special character(similar to password check)

const passwordCheck = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/;

function Password(word){
    if (passwordCheck.test(word)) {
        console.log("ok");
    } else {
        console.log("Bad password");
    }
}

Password("aya0821");