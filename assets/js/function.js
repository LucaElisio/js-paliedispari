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