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
//2) scrivere una funzione che data una stringa restituisca la sua versione maiuscola
//3) scrivere una funzione che data una stringa mi restituisca vero se è più lunga di 10 caratteri altrimenti restituisca falso
//4) scrivere una funzione pura che restituisca la scacchiera
//5) scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz
//6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale
