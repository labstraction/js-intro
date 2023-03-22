// // Incrementi

// let index = 5;

// // index = index + 5;
// index+=5;


// let counter = 0;

// // counter= counter + 1;
// // counter+= 1
// counter++;

// //---------------------------------------------------
// let pippo = 5;

// pippo++; //6

// pippo--; //5

// pippo+=5; //10 // pippo = pippo + 5;

// pippo=pippo - 3; //7

// pippo--; //6

// pippo=pippo + pippo; //12

// pippo*=2; //24 // pippo = pippo * 2

// console.log("la risposta è: ", pippo);

// //-----------------------------------------------------

// let pluto = 5;

// console.log(pluto++); // => console.log(pluto); pluto++
// console.log(pluto++); // => console.log(pluto); pluto++
// console.log(pluto);

// let paperino = 5;

// console.log(++paperino); // => paperino++; console.log(paperino)
// console.log(++paperino);

//------------------------------------------------------
// IF ELSE ELSEIF


// let pippo = true;

// if (pippo) {
//   console.log('var merda!')  
// } else {
//   console.log('viva var!')
// }

// let pluto = 3;

// if (pluto !== 3) {
//    console.log('viva javascript!!');
// }

// let paperino = 200;

// if (paperino === 3) {
//     console.log('qui');
// } else if( paperino === 5){
//     console.log('quo');
// } else if( paperino === 1){
//     console.log('qua');
// } else {
//     console.log('sticazzi');
// }


// let paperone = 5;

// if (paperone < 6){
//     console.log('dollari');    
// } else if (paperone < 10) {
//     console.log('euro');
// } else {
//     console.log('bitcoin');
// }


//------------------------------------------------------------
//CICLO WHILE

// while (true) {
//     console.log('ciao');
// }


// let index = 0;

// while (index < 10) {
//     index++;
//     console.log(index);
// }

// while (index > -1) {
//     index--;
//     console.log(index);
// }


//-----------------------------------------------------------------
// CICLO FOR

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// let index2 = 0;
// while (index2 < 10) {
//     console.log(index2);
//     index2++;
// }

// for (let index = 5; index < 100; index += 5) {
//     console.log(index);
// }


//---------------------------------------------
//ESERCIZI


//1) numeri dispari minori di 300
// let index = 1;
// while (index < 300) {
//     console.log(index);
//     index+=2;
// }

//2)da 10 a 0 e viceversa

//soluzione 1
// for (let counter = 10; counter >= 0; counter--) {
//     console.log(counter);
// }
// for (let counter = 1; counter <= 10; counter++) {
//     console.log(counter);
// }

//soluzione 2
// let index = 10
// let step = -1
// while (index <= 10) {
//     console.log(index)
//     if (index === 0) {
//         step = 1;
//     }
//     index += step;
// }

//soluzione 3

// let index = 0;
// let counter = 11;
// while(index <= 20){
//     if (index <= 10){
//         counter--;
//     }
//     else{
//         counter++;
//     }
//     index++;
//     console.log(counter);
// }

//3) triangolo di cacelletti

// #
// ##
// ###
// ####
// #####
// ######
// #######

// soluzione 1
// let string=''; 
// let index=1;

// while(index<=7){
//     string = string + '#';
//     index++;
//     console.log(string);
// }

// soluzione 2
// let string = '';
// while (string.length<7) {
//     string += '#'
//     console.log(string);
// }


// 4) FizzBuzz

// soluzione 1
// let counter = 1;
// while (counter <= 100){
//     console.log(counter);
//     counter++;
//     if((counter % 3 === 0) && (counter % 5 ===0)){
//         console.log('FizzBuzz');
//         counter++;
//     }
//     if(counter % 3 === 0){
//         console.log('Fizz');
//         counter++;
//     }
//     if(counter % 5 === 0){
//         console.log('Buzz');
//         counter++;
//     }
// }

// soluzione 2
// let number = 1;

// for (let loop = 0; loop < 100; loop++) {
    
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (number % 3 === 0 && number % 5 !== 0) {
//         console.log('Fizz');
//     } else if (number % 5 === 0 && number % 3 !== 0) {
//         console.log('Buzz');
//     } else {
//         console.log(number)
//     }
    
//     number += 1;

// };

//soluzione 3


// for (let i = 1; i < 101; i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i)
//     }

// };


//soluzione 4
// for (let i = 1; i < 101; i++) {
//     let result = '';
//     if (i % 3 === 0) {
//         result += 'Fizz';
//     }
//     if (i % 5 === 0){
//         result += 'Buzz';
//     }
//     if (result.length !== 0) {
//         console.log(result);
//         //continue;
//     } else {
//         console.log(i);
//     }
    
// }


//----------------------------------------------------------------
// cicli annidati

// for (let x = 1; x < 11; x++) {
//     for (let y = 1; y < 11; y++) {
//         console.log('X:', x, 'Y:', y);
//     }
// }

let scacchiera = "";
let size = 18;

for (let riga = 0; riga < size; riga++) {
    
    
    if (riga % 2 !== 0) {
        scacchiera += " #".repeat(size/2);
    } else if (riga % 2 === 0) {
        scacchiera += "# ".repeat(size/2);
    };
    
    scacchiera += "\n";

};

console.log(scacchiera);





    