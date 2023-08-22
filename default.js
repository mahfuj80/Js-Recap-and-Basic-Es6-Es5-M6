// default --> if value is not provided, take this as a default value. 
function add(num1 = 0, num2 = 0) {
    const result = num1 + num1;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 7);
// const sum = add(5);
const sum = add();


function fullName(first, last = '') {
    const full = first + " " + last;
    return full;
}

function friends(numbs = []) {

}

function person(human = {}) {

}

// DEFAULT PARAMETERS
/* 
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
*/