// test
// alert("ciao");


/**
 * Description: controllo se una parola è palindroma
 * @param {string} userWordToCheck la parola da controllare
 * @returns {boolean} true se la parola è palindroma,      altrimenti false
 */
function isPalindrome (userWordToCheck) {

    // Creo variabile booleana
    let isPal = false;

    // Creo variabile di appoggio
    let word = "";

    // Ciclo for per scorrere la parola al contrario
    for (let i = userWordToCheck.length - 1; i >= 0; i--) {
        const curLetter = userWordToCheck[i]
        // Concateno la lettera
        word += curLetter;
    }

    console.log(word);

    // Creo condizione di confronto tra le due parole
    if (word.toLocaleLowerCase() === userWordToCheck.toLocaleLowerCase()) {
        isPal = true;
    }

    console.log(isPal);

    // Ritorno il risultato della funzione
    return isPal;
    
}

/**
 * Description: genera numero random tra due estremi
 * @param {number} min estremo inferiore 
 * @param {number} max estremo superiore
 * @returns {number} il numero generato
 */
function getRndInteger(min, max) {
    const generatedNum = Math.floor(Math.random() * max - min + 1) + min;
    return generatedNum;
}


/**
 * Description: la funzione verifica se un numero è pari
 * @param {number} numberToCheck
 * @returns {boolean} true se il numero è pari, altrimenti false
 */
function isEven(numberToCheck) {
    let result = false; // boolean
    if (numberToCheck % 2 === 0) {
        result = true;
    }
    // output
    return result;
}