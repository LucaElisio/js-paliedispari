**Palindroma**  :jigsaw:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

**Svolgimento** 
1. Chiedo all'utente una parola *userWord*
2. Creo funzione per capire se la parole inserita è palindroma:
    La funzione avrà come parametro la parola inserita dall'utente e ritornerà *true*, altrimenti *false*
    1. Creo variabile booleana *isPal* = false.
    2. Attraverso ciclo for scorro al contrario le lettere della parola
        > Concateno la lettera corrente con le altre lettere e le salvo in una variabile *word*
    3. Creo una condizione:
        > se la variabile *word* è uguale a *userWord*: *isPal* sarà *true*.
    4. Infine ritorno il risultato.
3. Creo una condizione:
    > Se il risultato della funzione è *true* la parola è palindroma 
    > Altrimenti la parola non è palindroma