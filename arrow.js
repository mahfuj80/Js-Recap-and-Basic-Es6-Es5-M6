// function declaration 

// function add(a, b) {
//     const result = a + b;
//     return result;
// }


function add(a, b) {
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

// const sum = add3(5, 90);
// const sum = add4(4, 5, 6, 7);
// console.log(sum);

const mult = multiply(3, 3);
console.log(mult);

/* 
--------Arrow Function -------------
arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.
*/

// ------------3 ways to write arrow function-----------
// when there is no parameters, There should be as empty parenthesis 
const myName = () => console.log('JHON');
// usually you don't have to use parenthesis if there is only one parameter
const square = a => a * a;
// use parenthesis when there is more than one parameter
const add = (a, b) => a + b;


// Arrow function VS Regular functions
// Arrow Function :
/*
    1: If the arrow function contains one expression, you can omit the curly braces, and then the expression will be implicitly returned.
    ES6:
    let add = (x,y) => x+y;

    2. Arrow function:
    Arrow function don't have their own this;
    let me = {
        name: "John",
        thisInArrow: () => {
            console.log("My name is " + this.name);
        },
    };
    // My name is undefined
*/

// Regular function:
/* 
    1: In regular function, you have to use return keyword to return any value. If you don't return anything then the function will return undefined.
    ES5:
    function add(x,y){
        return x+y;
    }

    2. Regular Function:
    let me = {
        name: "John",
        thisInRegular() {
            console.log("My name is " + this.name);
        },
    };

    // My name is John
*/
