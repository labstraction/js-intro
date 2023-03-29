let a = 5
let b = "ciao"

function square(num) {
    return num*num
}

let f1 = function(n) {
    return n*n
}

let f2 = (n) => n*n

// Ripetere un'operazione un certo numero di volte

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function logNumbersFrom0To9() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    } 
}

// Astraggo i dettagli dell'algoritmo all'interno di una funzione
logNumbersFrom0To9();




function logNumbersFrom0To(maxNum) {
    for (let i = 0; i < maxNum; i++) {
        console.log(i);
    } 
}

function doubleNumbersFrom0To(maxNum) {
    for (let i = 0; i < maxNum; i++) {
        console.log(i * 2);
    } 
}


console.log("\n")
logNumbersFrom0To(10)

console.log("\n")
logNumbersFrom0To(20)






// Funzioni di ordine superiore
console.log("FUNZIONI DI ORDINE SUPERIORE: Ripetere una certa operazione a nostra scelta.")

function logNumber(n) {
    console.log(n)
}

function logDouble(n) {
    console.log(n*2)
}

function logHello() {
    console.log("Hello")
}

function repeatFrom0To(maxNum, func) {
    for (let i = 0; i < maxNum; i++) {
        func(i) // Che operazione è func? Dipende...
        // func <- logNumber
        // func <- logDouble
        // ...
    } 
}

console.log("\n")
repeatFrom0To(10, logNumber)

console.log("\n")
repeatFrom0To(10, logDouble)

console.log("\n")
repeatFrom0To(10, logHello)

// Chiamare la funzione repeatFrom0To in modo che
// stampi per ogni numero (i) se i è divisibile per 3  

function isDivisibleBy3(n) {
    console.log(n%3 === 0)
}

// FUNZIONI ANONIME

repeatFrom0To(15, function(n) {
    console.log(n%3 === 0)
})

// LAMBDA / ARROW FUNCTIONS

// setInterval(function() { console.log("Test") }, 1000)
// setInterval(() => console.log("Test"), 1000);






console.log("CLOSURE E FUNZIONI CHE RESTITUISCONO ALTRE FUNZIONI")

// CLOSURE

let counter = 0

function printAndIncrementCounter() {
    console.log(counter)
    counter++
}

printAndIncrementCounter()
printAndIncrementCounter()
printAndIncrementCounter()

console.log("Normal console.log: " + counter)

// FUNZIONI CHE RITORNANO ALTRE FUNZIONI

function getRangeCheckFunction(min, max) {
    return function(n) {
        return n >= min && n <= max
    }
}


let isBetween10and20 = getRangeCheckFunction(10, 20)
console.log(isBetween10and20(7))
console.log(isBetween10and20(1))
console.log(isBetween10and20(-8))



function isInRange(n, min, max) {
    return n >= min && n <= max
}

console.log(isInRange(7, 0, 5))
console.log(isInRange(1, 0, 5))
console.log(isInRange(-8, 0, 5))


let isBetween0and5 = getRangeCheckFunction(0, 5)
console.log(isBetween0and5(7))
console.log(isBetween0and5(1))
console.log(isBetween0and5(-8))





// ARRAY E FUNZIONI DI ORDINE SUPERIORE
console.log("ARRAY E FUNZIONI DI ORDINE SUPERIORE")

let numbers = [1, 2, 3, 4, 5] // [1, 4, 9, 16, 25]

// map

let squaredNumbers = []

for(let n of numbers) {
    squaredNumbers.push(n*n)
}

let doubleNumbers = []

for(let n of numbers) {
    doubleNumbers.push(n*2)
}

// SCRIVERE UNA FUNZIONE map() CHE DATO IN INGRESSO UN ARRAY,
// RESTITUISCE UN NUOVO ARRAY CON GLI STESSI ELEMENTI DEL PRIMO
// TRASFORMATI USANDO UNA FUNZIONE RICEVUTA IN INGRESSO

function map(/* ... */) {
    /* ... */
}

/*
numbers = [1, 2, 3, 4, 5]
squaredNumbers = map(numbers, n => n * n)
// squaredNumbers -> [1, 4, 9, 16, 25]

doubleNumbers = map(numbers, n => n * 2)
// doubleNumbers -> [2, 4, 6, 8, 10]
*/




// MAP, ecc.
console.log("MAP, FILTER, ecc.")

let testArray = [9,9,3]
console.log(testArray.map(n => n * n))

console.log(testArray.filter(n => n <= 5))

let sum = 0;
testArray.forEach(n => sum += n)
console.log(sum)



let words = ["ciao", "pippo", "topolino", "ciao mondo"]
let res = words
            .filter(w => w.length > 5)
            .map(w => w.length)
            .forEach(numberOfChars => console.log(numberOfChars))

console.log([1,2,3,4,5].reduce((accumulator,num) => accumulator * num, 0))


