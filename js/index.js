// let greetings;
// alert(greetings);

// Data Types: 
// string
// boolean - true, false
// number
// null
// undefined
// Object
// Symbol

let name = prompt('Enter your name');
//let створюю змінну
// const краще використовувати для змінних, стврює змінну яку записати можна лише один раз а використовувати безліч
// var не варто використовувати для стовення змінних
let msg = 'Hello, ' + name;
alert(msg);

const age = parseInt(prompt('Enter your age'));
//parseFloat повертає з тексту примусово числа з комою
// parseInt примусово робить текст в число
//prompt повертає завжди текст
// Зробити змінну, яка буде містити вік + 1
// Вивести результат на екран
const newAge = age + 1;
alert('U r ' + checkAge(age)) ;

function add(a, b, c) {
    const res = a + b + c;
    return res;
}
// функція облвсть памяті яка містить код і дані
//у імені функці₴ має бути присутнє дієслово
const total = add(2, 2, 5); //немає значення де писати параметри функціії зверху чи знизу самої функції
alert (total);

function checkAge(age) {
    if (age <= 18) {
        return 'child';
}
    else { return 'adult' ;
    }
}






