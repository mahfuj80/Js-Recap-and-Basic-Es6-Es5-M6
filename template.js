const first = 'Jaan';
const last = 'pakhi';
const greet = 'Potas potas';
const name = first + " " + last + ' ' + greet;
console.log(name);

const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const numbers = [45, 48, 98, 78];
const student = { name: 'jhon ochena', age: 5 };

const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math);
// const math = `The sum of ${numbers[0]} and ${b} is ${a + b}`;
// console.log(math);

const email = 'Hi jon \n' +
    'cena cena lage \n' +
    'tumi mara mari korba naki';

console.log(email);

const challenge = `John Cena
cena naki ochena 
mair dimu prochur`;
console.log(challenge);

/* 
COMMON KEYS/ASCII CODE YOU SHOULD KNOW....
we see here:
1. \n: newLine (It takes the cursor to the next line)
2. `: Backtic
3. '': Single quotes
4. "": Double quotes
5. /: Forward slash
6. \: Forward slash
7. ; : Semicolon

-------------TEMPLATE LITERALS----------
Template literal are enclosed by backtic(`) characters instead of doulbe or single quotes, allowing for the following:
1) multi-line strings
2) string interpolation


*/