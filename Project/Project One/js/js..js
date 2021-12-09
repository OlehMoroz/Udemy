"use strict"; // Рядок який вказує на те що ми працюємо у новому режимі форматування

let numberOne = 5; // Змінна яку можна змінювати
const numberTwo = 5; // Константа яка не змінна

// Тиип данних

let number = 1; // Число
let string = 'Рядок'; // Строка
let booleen = true; // Логічний true/false
// Null (Коли взагалі немає нічого)
// Undefined (Існує але немає ніякого значення)
// Symbol (Символ)
// BigIn (Велике число)

// Об'єкти

const obj = {
    firstValue : 1,
    secondValue : 'String'
};

// console.log(obj.firstValue); or console.log(obj['firstValue']);

const arr = [                   // Масив (теж об'єкт)
    'firstValue : 1',
    'secondValue : "String"'
];

arr[0] = 2;             // Запис у масив
arr[1] = 'New string';


// console.log(arr[0, 1]);

// Вся інформація яки приходить від користувачів у вигляді СТРОКИ

// typeof - Команда для дізнання типу данних



// Інтерполяція

const category = 'js-category';

const newUrl = `url/${category}/page`;

let incr = 10,
    decr = 10;

incr++; ++incr; // 11
decr--; --decr; // 9

//console.log(incr++); 10
//console.log(decr++); 10

//console.log(++incr); 11
//console.log(--decr); 9

let i = (5%2); // i=1

//&& = і
//|| = чи

if (4 == 9) {
    console.log('true');
} else if (4  > 5){
    console.log('not now');
} else {
    console.log('false');
}

(num == 50) ? console.log('true') : console.log('false'); // Тернарний оператор

let num = 50;

switch (num) {
    case 49:
        console.log('false');
        break;
    case 51:
        console.log('false');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('not now');
        break;
}


let newNum = 50;

while (newNum < 55) {
    console.log(newNum);
    newNum++;
}

do {
    console.log(newNum);
    newNum++; 
}

while (newNum < 55);


for (let i = 1; i < 8; i++) {
    console.log(i);
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break;
    }

    console.log(i);
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }

    console.log(i);
}