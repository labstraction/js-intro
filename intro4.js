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



const arrayOfStrings = ['andrea', 'jing', 'valentina', 'vlad'];

for (let i = 0; i < arrayOfStrings.length; i++) {
    const element = arrayOfStrings[i];
    console.log(element);
}



//1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

const pippo = [3, 15, 10, 8 ,4]

function printArrayInFizzBuzzLogic(arrayOfNumber){

}

printArrayInFizzBuzzLogic(pippo)
//Fizz
//FizzBuzz
//Buzz
//8
//4

//2) scrivere una funzione che prende come parametro un array di stringhe e logga quelle più piccole di 5 caratteri

const pluto = ['casa', 'armadio', 'gatto', 'perfetto', 'mano']

function printShorterThan5Chars(arrayOfStrings){

}

printArrayInFizzBuzzLogic(pluto)
//casa
//mano


//3) scrivere una funzione che prende come parametro una stringa e restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo
function pickFirst5CharsAndMakeUpperCase(text) {
    
}

console.log(pickFirst5CharsAndMakeUpperCase('deltaplano')) //DELTA



//4) scrivere una funzione che prende come parametro una stringa e restituisce la lunghezza della stringa senza spazi

function lengthOfTextWithoutSpaces(text) {
    
}

console.log(lengthOfTextWithoutSpaces('il nano enorme')) //12

//5) scrivere una funzione che prende come parametro una stringa e restituisce il numero degli spazi

function countSpaces(text) {
    
}

console.log(countSpaces('il nano enorme')) //2

