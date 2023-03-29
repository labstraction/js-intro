//ARRAY

//let pippo = [15, 3, 23, 34, 21];

//let pluto = [1, 'ciao', false]  //MALISSIMO

// pippo.push(100); //[15, 3, 23, 34, 21, 100]

// const pluto = pippo.pop() //[15, 3, 23, 34, 21];
// const paperino = pippo.pop() //[15, 3, 23, 34];

// console.log(pippo); //[15, 3, 23, 34]
// console.log(pluto); //100
// console.log(paperino); //21

// pippo.unshift(200); //[200, 15, 3, 23, 34, 21]

// const paperone = pippo.shift(); //[15, 3, 23, 34, 21]
// const paperina = pippo.shift(); //[3, 23, 34, 21]

// console.log(pippo);//[3, 23, 34, 21]
// console.log(paperone);//200
// console.log(paperina);//15

// console.log(pippo);
// pippo.pop()
// console.log(pippo); //a volte il log non è affidabile



// const arrayOfStrings = ['andrea', 'davide', 'jing', 'valentina', 'vlad'];

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }


// const indexOfJing = arrayOfStrings.indexOf('jing');
// console.log(indexOfJing);
// const indexOfSimone = arrayOfStrings.indexOf('simone');
// console.log(indexOfSimone);
// arrayOfStrings[0] = 'pietro';
// console.log(arrayOfStrings);


//---------------------------------------------------------------------------------------
//OGGETTI

// const andrea = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     isMarried: false,
//     pupils: ['davide', 'jing', 'valentina', 'vlad'],
//     dog: {
//         name: 'ariel',
//         breed: 'border-collie'
//     },
//     "cool car": "bmw"
// }

// console.log(andrea);

// console.log(andrea.surname);

// console.log(andrea['yob']);

// console.log(andrea['cool car']);


// const andrea = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     nickname: 'labstraction',
//     email: 'ilmionuovoaccount@gmail.com'
// }

// const simone = {
//     name: 'Simone',
//     surname: 'Maccarone',
//     yob: 2003,
//     nickname: 'coderMonkey',
//     email: 'superpippo@gmail.com'
// }

// const myClass = [andrea, simone];


// for (let i = 0; i < myClass.length; i++) {
//     const person = myClass[i];
// //     const description = 
// //     `NOME: ${person.name} ${person.surname} (${person.nickname})
// // ETA': ${2023 - person.yob}
// // Email: ${person.email}`
//     // console.log(description);
//     console.log('NOME: ' + person.name + ' ' + person.surname + ' (' + person.nickname + ')\n'
//                +'ETA\': ' + (2023 -person.yob) + '\n'
//                +'EMAIL: ' + person.email)
// }


// NOME: Andrea Asioli (labstraction),
// ETA: 45 anni,
// EMAIL: ilmionuovoaccount@gmail.com


//-------------------------------------------------------------------------
// DA ARRAY A OGGETTI E VICEVERSA

// const arielloArray = ['ariel', 'border-collie', 'maschio', 'bianco e nero'];

// console.log(arielloArray);

// const arielloObj = {
//     name: arielloArray[0],
//     breed: arielloArray[1],
//     gender: arielloArray[2],
//     color: arielloArray[3]
// }

// console.log(arielloObj);

// const newArielloArray = Object.values(arielloObj);

// console.log(newArielloArray);

// const newKeysArray = Object.keys(arielloObj);

// console.log(newKeysArray);


//-------------------------------------------------------------------------
// VALUE TYPES AND REFERECE TYPES

// let pippo = 5;
// let pluto = pippo;
// pippo = 7;

// console.log(pippo);
// console.log(pluto);


// let topolino = {yob: 1930, name: 'micky mouse'};
// let newTopolino = topolino;
// topolino.yob = 1950;

// console.log(topolino.yob);
// console.log(newTopolino.yob);


// function sum2(selectedNumber){
//     selectedNumber = selectedNumber + 2
//     return selectedNumber;
// }

// let paperino = 5;

// let basettoni = sum2(paperino);


// console.log(paperino);
// console.log(basettoni)


// function make2YearsOlder(person) {
//     person.yob = person.yob + 2;
//     return person;
// }

// let andrea = {name: 'Andrea', yob: 1978}

// let olderAndrea = make2YearsOlder(andrea);


// console.log(andrea);
// console.log(olderAndrea);


// function make2YearsOlderWithClone(person){
//     // let clone = {name: person.name, yob: person.yob};
//     let clone = {...person};
//     clone.yob = clone.yob + 2;
//     return clone;
// }

// let simone = {name: 'simone', yob: 2003};

// let olderSimone = make2YearsOlderWithClone(simone);

// console.log(simone);
// console.log(olderSimone);


//-------------------------------------------------------------------------
//DESTRUTTURARE

// const libro = {
//     titolo: 'la divina commedia',
//     autore: 'dante alighieri',
//     anno: 2019,
//     paese: 'italia',
//     casaEditrice: 'einaudi'
// }

// // const titolo = libro.titolo;
// // const autore = libro.autore;

// const {titolo, autore} = libro;

// console.log(titolo, 'di ' + autore);


//-------------------------------------------------------------------------
//JSON


// const libro = {
//     titolo: 'la divina commedia',
//     autore: 'dante alighieri',
//     anno: 2019,
//     paese: 'italia',
//     casaEditrice: 'einaudi'
// }

// const libroInStringa = JSON.stringify(libro);

// console.log(libro);
// console.log(libroInStringa);


// const libroInStringa2 = '{"titolo":"iliade","autore":"omero","anno":2010,"paese":"italia","casaEditrice":"giunti"}';
// const libro2 = JSON.parse(libroInStringa2);

// console.log(libroInStringa2);
// console.log(libro2);

//-------------------------------------------------------------------------
//FILTER
//1) scrivere una funzione che dato un array di numeri restituisce un array con i numeri maggiori o uguali 0

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function filterNegative(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element >= 0){
//             tempArray.push(element);
//         }
//     } 
//     return tempArray;
// }

// console.log(filterNegative(numbers)) // [100, 0, 1001, 1, 34]


//MAP
//2) SCRIVERE UNA FUNZIONE CHE DATO UN ARRAY DI NUMERI LI MOLTIPLICA TUTTI PER DUE

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function multiplyAllElementsBy2(array) {
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const risultato = element*2;
//         tempArray.push(risultato);
//     }
//     return tempArray;
// }

// console.log(multiplyAllElementsBy2(numbers)) //[200, -46, 0, -468, 2002, 2, 68, -24]

//REDUCE
//3) creare una funzione che somma tutti gli elementi di un array di numeri

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function sumAllElements(array){
//     let tempNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempNumber = tempNumber+element;
//     }
//     return tempNumber;
// }

// console.log(sumAllElements(numbers)) //867
//-------------------------------------------------------------------------
///TUTTI I CICLI IN JAVASCRIPT

const numbers = [9, 8, 7, 1, 2, 3];

//WHILE
let i = 0
while (i < numbers.length) {
    const element = numbers[i];
    console.log(element);
    i++;
}
//FOR
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}
//DOWHILE
let j = 0
do {
    const element = numbers[j];
    console.log(element);
    j++;
} while (j<numbers.length);
//FOROF
for (const element of numbers) {
    console.log(element);
}
//FOREACH
numbers.forEach((element) => console.log(element));
//MAP
numbers.map((element) => element * 2)
//FILTER
numbers.filter((element) => element % 2 === 0)
//REDUCE
numbers.reduce((previosElement, currentElement) => previosElement + currentElement, 0);


const strings = ['qui', 'quo', 'qua'];

strings.reduce((previosElement, currentElement) => previosElement + currentElement, '');

//FORIN - per ciclare gli oggetti

const andrea = {
    name: 'andrea',
    surname: 'asioli',
    hasADog: true,
    yob: 1978
}

for (const key in andrea) {
    if (Object.hasOwnProperty.call(andrea, key)) {
        const value = andrea[key];
        console.log(`andrea ha la proprieta ${key} associata al valore ${value}`)
    }
}

//-------------------------------------------------------------------------
//ESERCIZI


//1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

// const pippo = [3, 15, 10, 8 ,4]

// function printArrayInFizzBuzzLogic(arrayOfNumber){
//     for (let i = 0; i < arrayOfNumber.length; i++) {
//         const element = arrayOfNumber[i];
//         if (element % 3 === 0 && element % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (element % 3 === 0){
//             console.log('Fizz');
//         } else if (element % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(element);
//         }
//     }
// }

// printArrayInFizzBuzzLogic(pippo)
//Fizz
//FizzBuzz
//Buzz
//8
//4

//2) scrivere una funzione che prende come parametro un array di stringhe e logga quelle più piccole di 5 caratteri

// const pluto = ['casa', 'armadio', 'gatto', 'perfetto', 'mano']

// const paperino = ['qui', 'quo', 'qua', 'paperina'];
//                  //012(3)
// function printShorterThan5Chars(arrayOfStrings){
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         const element = arrayOfStrings[i];
//         if (element.length < 5) {
//             console.log(`la stringa è ${element}`);
//         }
//     }
// }

// printShorterThan5Chars(pluto);
// printShorterThan5Chars(paperino);
//casa
//mano


//3) scrivere una funzione che prende come parametro una stringa e restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo
// function pickFirst5CharsAndMakeUpperCase(text) {
//     let resultText = '';
//     for (let i = 0; i < text.length; i++) {
//         if (i < 5) {
//             const char = text[i];
//             resultText += char;
//         }    
//     }
//     return resultText.toUpperCase();
// }

// console.log(pickFirst5CharsAndMakeUpperCase('deltaplano')) //DELTA
//                                              01234


//4) scrivere una funzione che prende come parametro una stringa e restituisce la lunghezza della stringa senza spazi

// function lengthOfTextWithoutSpaces(text) {
//     //const textWithoutSpaces = text.replaceAll(' ', '');
//     const textWithoutSpaces = text.replace(/\s/g, '');
//     return textWithoutSpaces.length;
// }

// console.log(lengthOfTextWithoutSpaces('il nano enorme')) //12

//5) scrivere una funzione che prende come parametro una stringa e restituisce il numero degli spazi

// function countSpaces(text) {
//     let numberOfSpaces = 0;
//     for (let i = 0; i < text.length; i++) {
//         const char = text[i];
//         if (char === ' ') {
//             numberOfSpaces++;
//         }
//     }
//     return numberOfSpaces;
// }

// console.log(countSpaces('il nano enorme')) //2


///--------------------------------------------------------------------------------------------------
//ESERCIZI 27/03

//1) scrivere una funzione che prende in input un array di numeri è restituisce un array di stringhe in logica FizzBuzz (map)

// const numbers = [3, 5, 15, 8, 12, 2];

// function convertArrayInFizzBuzz(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let risultato = '';
//         if (element % 3 === 0 && element % 5 === 0) {
//             risultato = 'FizzBuzz';
//         } else if (element % 3 === 0) {
//             risultato = 'Fizz';
//         } else if (element % 5 === 0) {
//             risultato = 'Buzz';
//         } else {
//             risultato += element;
//         }
//         tempArray.push(risultato);
//     }
//     return tempArray;
// }

function convertArrayInFizzBuzz2(array){
    const newArray = array.map((numb) => {
        let risultato = '';
        if (numb % 3 === 0 && numb % 5 === 0) {
            risultato = 'FizzBuzz';
        } else if (numb % 3 === 0) {
            risultato = 'Fizz';
        } else if (numb % 5 === 0) {
            risultato = 'Buzz';
        } else {
            risultato += element;
        }
        return risultato;
    });
    return newArray;
}

// console.log(convertArrayInFizzBuzz(numbers)) //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']



//2) scrivere una funzione che prende in input un array di numeri è restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa (map)

// const numbers1 = [-3, 5, 15, -8, 12, 2, 0];

// function invertElements(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let risultato = 0;
//         if (element !== 0) {
//             risultato = element * -1;
//         }
//         tempArray.push(risultato);
//     }
//     return tempArray;
// }

// console.log(invertElements(numbers1)) //[3, -5, -15, 8, -12, -2, 0]

//3) scrivere una funzione che prende in input un array di stringhe è restituisce un array di numeri con la lunghezza delle stringhe (map)

// const strings = ['pippo', 'pluto', 'qui'];

// function lengthOfElements(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempArray.push(element.length);
//     }
//     return tempArray;
// }

// console.log(lengthOfElements(strings)) //[5, 5, 3]


//4) scrivere una funzione che prende in input un array di stringhe è restituisce solo quelle che contengono la lettera z (filter)

// const strings2 = ['pippo', 'pluto', 'qui', 'zapotec']; 

// function onlyElementsWithZ(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         // if (element.includes('z')){
//         //     tempArray.push(element);
//         // }
//         if (element.indexOf('z') !== -1){
//             tempArray.push(element);
//         } 
//     } 
//     return tempArray;
// }

// console.log(onlyElementsWithZ(strings2)) //['zapotec']

//5) scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari (filter)

// const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

// function onlyEven(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 2 === 0){
//             tempArray.push(element);
//         } 
//     } 
//     return tempArray;
// }

// console.log(onlyEven(numbers2)) //[-8, 12, 2, 0]

//6) scrivere una funzione che prende in input un array di stringhe restituisce una stringa composta dalle iniziali
//(reduce)
// const strings3 = ['pippo', 'osvaldo', 'paperino'];

// function sumFirstChar(array){
//     let tempString = "";
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             const firstChar = element[0];
//             tempString += firstChar;
//         }
//     return tempString;
// }

// console.log(sumFirstChar(strings3)) //'pop'

//7) scrivere una funzione che prende in input un array di numeri e restituisce il maggiore

// const numbers3 = [-3, 5, 15, -8, 12, 2, 0];
// const numbers4 = [-1, -4, -3]

// function maxElement(array){
//     let tempNumber = array[0];
//         for (let i = 1; i < array.length; i++) {
//             const element = array[i];
//             if (tempNumber < element) {
//                 tempNumber = element;
//             }
//         }
//     return tempNumber;
// }

// function maxElement2(array){
//     let tempNumber = null;
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             if (tempNumber === null || tempNumber < element) {
//                 tempNumber = element;
//             }
//         }
//     return tempNumber;
// }

// function maxElement3(array){
//     let tempNumber = -Infinity;
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             if (tempNumber < element) {
//                 tempNumber = element;
//             }
//         }
//     return tempNumber;
// }


// console.log(maxElement(numbers3)) //15
// console.log(maxElement(numbers4)) //-1
