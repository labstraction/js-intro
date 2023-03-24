// //scope

// const pippo = 'ciao';


// if (true) {
//     console.log(pippo);
//     const pluto = 'javascript'
//     if(true){
//         console.log(pluto);
//         const paperino = 'pizza';
//     }
//     //console.log(paperino); non è possibile leggere la variabile di uno scope interno
// }


// // const pippo = 'pippo'; non è possibile dichiarare due variabili con lo stesso nome nello stesso scope

// for (let i = 0; i < 3; i++) {
//     console.log('ciao');

// }

// for (let i = 0; i < 3; i++) {
//     console.log('mondo');

// }


// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 10; i++) {
//         console.log(i); //shadowed variable

//     }
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i);
//         console.log(j);

//     }
// }

//--------------------------------------------------------------------------
//Funzioni


// function elevaAlQuadrato(numero){ /// viva la normalità
//     const risultato = numero * numero;
//     return risultato;
// }

// const dueAlQuadrato = elevaAlQuadrato(2);
// console.log(dueAlQuadrato);
// const cinqueAlQuadrato = elevaAlQuadrato(5);
// console.log(cinqueAlQuadrato);
// console.log(elevaAlQuadrato(50));

// const elevaAlQuadrato2 = function(numero){ ///funzione anonima
//     // const risultato = numero * numero;
//     // return risultato;
//     return numero * numero;
// }

// console.log(elevaAlQuadrato2(3));

// const elevaAlQuadrato3 = (numero) => numero * numero; // funzione lambda

// // const elevaAlQuadrato4 = (numero) => {
// //     const risultato = numero * numero;
// //     return risultato;
// // }

// console.log(elevaAlQuadrato3(12));


// function elevazioneAPotenza(base, esponente) {
//     const risultato = base**esponente;
//     return risultato;
// }

// console.log(elevazioneAPotenza(3, 4));

//----------------------------------------------------------------
// funzioni pure e impure

// function scriviNellaConsole(messaggio) { // funzione impura
//     console.log(messaggio);
//     // return undefined;
// }

// const pippo = scriviNellaConsole('scemo chi legge');

// console.log(pippo);

// function sommaUno(numero) { // funzione pura
//     return numero + 1;
// }

// // function sommaDueELogga(numero){ NOOOOOOOOOOOOOOOOOOOOOOO!!!
// //     const risultato = numero + 2;
// //     console.log(risultato);
// //     return risultato;
// // }

// function log(messaggio){
//     console.log(messaggio);
// }

// function sommaDue(numero){
//     const risultato = numero + 2;
//     return risultato;
// }

// log(sommaDue(5));





// let pluto = 7;

// // function duplicaPluto(){ //impura
// //     pluto = pluto * 2;
// // }

// // console.log(pluto);

// // duplicaPluto();
// // duplicaPluto();

// // console.log(pluto);


// function duplica(numero){ /// pura
//     return numero * 2;
// }


// pluto = duplica(pluto);

// console.log(pluto);


// function elevazioneAPotenza(base, esponente) {
//     if (esponente === undefined) {
//         const risultato = base**2;
//         return risultato;
//     } else {
//         const risultato = base**esponente;
//         return risultato;
//     }
// }

// function elevazioneAPotenzaConDefault(base, esponente=2) {
//     const risultato = base**esponente;
//     return risultato;
// }

// console.log(elevazioneAPotenzaConDefault(3));

//-------------------------------------------------------------------------

//esercizi
//1) scrivere una funzione che dato un numero se è positivo lo moltiplichi per due

function doubleNumberIfPositive(selectedNumber) {
    if (selectedNumber >= 0) {
        return selectedNumber * 2;
    }
    return selectedNumber;
}

// const doubleNumberIfPositiveLambda = (n) => n >= 0 ? n * 2 : n;
// function doubleNumberIfPositiveVersion2(selectedNumber){
//     return selectedNumber >= 0 ? selectedNumber * 2 : selectedNumber;
// }


console.log(doubleNumberIfPositive(20)) //40
console.log(doubleNumberIfPositive(-10)) //-10


//2) scrivere una funzione che data una stringa restituisca la sua versione maiuscola
function convertTextToUpperCase(text) {
    if (typeof text === 'string') {
        let textUpperCase = text.toUpperCase();
        return textUpperCase
    } else {
        return '';
    }
}

//const convertTextToUpperCaseLambda = (text) => typeof text === 'string' ? text.toUpperCase () : '';

console.log(convertTextToUpperCase('ciao')); //CIAO
console.log(convertTextToUpperCase('ciao Andrea')); //CIAO ANDREA
console.log(convertTextToUpperCase('CIAO CIAO')); //CIAO CIAO

//3) scrivere una funzione che data una stringa mi restituisca vero se è più lunga di 10 caratteri altrimenti restituisca falso
function isTextMoreThan10Char(text) {
    let isMoreThan10;
    if (text.length > 10) {
        isMoreThan10 = true;
    } else {
        isMoreThan10 = false;
    }
    return isMoreThan10;
}

// function isTextMoreThan10CharVersion2(text) {
//     if (text.length > 10 ) {
//         return true;
//     }
//     return false;
// }

// function isTextMoreThan10CharVersion3(text) {
//     return text.length > 10;
// }

// const isTextMoreThan10CharLambda = (text) => text.length > 10;

console.log(isTextMoreThan10Char('pippo')); //false
console.log(isTextMoreThan10Char('le mutande di mia nonna')); //true

//4) scrivere una funzione pura che restituisca la scacchiera
function buildChessBoardWithHashtag(size) {
    let chessboard = '';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    chessboard += '#';
                } else {
                    chessboard += ' '; // 'spazio'
                }
            } else {
                if (x % 2 === 0) {
                    chessboard += ' '
                } else {
                    chessboard += '#'
                }
            }
        }
        chessboard += '\n';
    }
    return chessboard;
}

console.log(buildChessBoardWithHashtag(3)) //# #
                                           // # 
                                           //# #


//5) scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz
function convertNumberToFizzBuzzLogic(selectedNumber) {
    if (selectedNumber % 3 === 0 && selectedNumber % 5 === 0) {
        return 'FizzBuzz';
    } else if (selectedNumber % 3 === 0) {
        return 'Fizz';
    } else if (selectedNumber % 5 === 0) {
        return 'Buzz';
    }
    return selectedNumber;
}

console.log(convertNumberToFizzBuzzLogic(3)); //Fizz
console.log(convertNumberToFizzBuzzLogic(6)); //Fizz
console.log(convertNumberToFizzBuzzLogic(10)); //Buzz
console.log(convertNumberToFizzBuzzLogic(15)); //FizzBuzz
console.log(convertNumberToFizzBuzzLogic(2)); //2


//6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale
function selectOddCharsFromText(text) {
    let result = '';
    for (let i = 1; i < text.length; i+=2) {
        result += text.charAt(i);
    }
    return result;
}

function selectOddCharsFromTextVersion2(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 !== 0) {
            result += text[i];
        }
    }
    return result;
}

console.log(selectOddCharsFromText('ciao')); // io
console.log(selectOddCharsFromText('andrea')); // nra
console.log(selectOddCharsFromText('andrea il malvagio')); // nrai avgo



//7) esercizio libro
function findMinNumber(number1, number2) {
    if(number1 > number2){
        return number2;
    }else{
        return number1;
    }
}

console.log(findMinNumber(10, 5)) //5
console.log(findMinNumber(-10, 0)) //-10

const findMinNumberLambda = (number1,number2) => number1 > number2 ? number2 : number1;

//8) scrivere una funzione che sommi tutti i numeri in un range prestabilito

function sumRange(startNumber, endNumber){
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumRange(0, 3)) //6
console.log(sumRange(1, 3)) //6
console.log(sumRange(1, 5)) //15
console.log(sumRange(2, 6)) //20
console.log(sumRange(6, 6)) //6
console.log(sumRange(-2, 2)) //0


//------------------------------------------------------------------------------
//LE FUNZIONI POSSONO USARE ALTRE FUNZIONI

function doubleAndPow3(selectedNumber) {
    // const double = selectedNumber * 2;
    // const pow3 = double ** 3;
    // return pow3;
    //------------------------------------------------
    // const double = makeDouble(selectedNumber);
    // const pow3 = makePow3(double);
    // return pow3;
    //---------------------------------------
    return makePow3(makeDouble(selectedNumber));
}

function makeDouble(selectedNumber) {
    return selectedNumber * 2;
}

function makePow3(selectedNumber){
    return selectedNumber ** 3;
}

console.log(doubleAndPow3(2)); //64
console.log(doubleAndPow3(3)); //216



function ifMoreThan10CharUppercase(text){

    function isMoreThan10CharInside(textToCheck) {
        return textToCheck.length > 10;
    }

    if (isMoreThan10CharInside(text)) {
        return text.toUpperCase();
    } else {
        return text;
    }
    
}

console.log(ifMoreThan10CharUppercase('il cane rosa non è in forma'));

//--------------------------------------------
//RICORSIONE

function sumRangeRecursive(startNumber, endNumber, accumulator = 0){
    if (startNumber > endNumber) {
        return accumulator;
    }
    const newStart = startNumber + 1;
    const newAccumulator = accumulator + startNumber;
    return sumRangeRecursive(newStart, endNumber, newAccumulator);
}

console.log('recursive', sumRangeRecursive(0, 3)) //6

//1) startNumber = 0; endNumber = 3; accumulator = 0 -> newStart = 1; newAccumulator = 0;
//2) startNumber = 1; endNumber = 3; accumulator = 0 -> newStart = 2; newAccumulator = 1;
//3) startNumber = 2; endNumber = 3; accumulator = 1 -> newstart = 3; newAccumulator = 3;
//4) startNumber = 3; endNumber = 3; accumulator = 3 -> newStart = 4; newAccumulator = 6;
//6) startNumber = 4; endNumber = 3; accumulator = 6 ====> 6

console.log('recursive', sumRangeRecursive(1, 3)) //6
console.log('recursive', sumRangeRecursive(1, 5)) //15
console.log('recursive', sumRangeRecursive(2, 6)) //20
console.log('recursive', sumRangeRecursive(6, 6)) //6
console.log('recursive', sumRangeRecursive(-2, 2)) //0




function isEven(selectedNumber) {

    if(selectedNumber === 0){
        return true;
    }

    if (selectedNumber === 1) {
        return false;
    }
    const newNumber = selectedNumber -2
    return isEven(newNumber);
}

console.log(isEven(0)); //true
console.log(isEven(1)); //false
console.log(isEven(3)); //false
//console.log(isEven(-5))
//1) selectedNumber = 3 -> newNumber = 1
//2) selectedNumber = 1 -> false
console.log(isEven(8)); //true
//1) selectedNumber = 8 -> newNumber = 6
//2) selectedNumber = 6 -> newNumber = 4
//3) selectedNumber = 4 -> newNumber = 2
//4) selectedNumber = 2 -> newNumber = 0
//5) selectedNumber = 0 -> true


function isMyNumberEven(selectedNumber){
    if(selectedNumber === 0){
        return true;
    }
    if (selectedNumber === 1) {
        return false;
    }
    const newNumber = selectedNumber - 2
    return !isMyNumberOdd(newNumber); 
}


function isMyNumberOdd(selectedNumber){
    if(selectedNumber === 0){
        return false;
    }
    if (selectedNumber === 1) {
        return true;
    }
    const newNumber = selectedNumber - 2
    return !isMyNumberEven(newNumber); 
};

console.log(isMyNumberEven(3)); //false
console.log(isMyNumberOdd(3)); //true
