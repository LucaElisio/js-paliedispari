// test
// alert("ciao");

// Chiedo all'utente una parola
// const userWord = prompt("Dimmi una parola");


// Condizione per stampare se la parola è palindroma o no
// if (isPalindrome(userWord)) {
//     console.log("Palindroma");
// } else {
//     console.log("Non è palindroma");
// }


///////////////////////////////////


// Chiedo all'utente di scegliere tra pari e dispari, controllando che non inserisco un valore errato
let userChoice;
do {
    userChoice = prompt("Scegli tra pari o dispari");
} while (userChoice !== "pari" && userChoice !== "dispari");

console.log("Scelta --> ", userChoice);

// Chiedo all'utente di inserire un nnumero tra 1 e 5, controllando che il valore sia corretto
// Definisco variabili min e max
const min = 1;
const max = 5;
let userNumber;
do {
    userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));    
} while (userNumber < 1 || userNumber > 5);

console.log("Numero utente ", userNumber);

// Richiamo la funzione
const rndNumber = getRndInteger(min, max);

console.log("Numero casuale ", rndNumber);

// Sommo il risultato della funzione con il numero inserito dall'utente
const sum = rndNumber + userNumber;
console.log("Somma = ", sum);

// Richiamo la funzione
const isEvenResult = isEven(sum);
console.log(isEvenResult);

// Condizione per stabilire il vincitore
if (isEvenResult && userChoice.toLocaleLowerCase() === "pari") {
    console.log("Hai vinto!!");
} else if (!isEvenResult && userChoice.toLocaleLowerCase() === "dispari"){
    console.log("Hai vinto!!");
} else {
    console.log("Hai perso");
}
