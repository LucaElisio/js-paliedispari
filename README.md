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
    4. Infine ritorno il risultato

3. Creo una condizione:
    > Se il risultato della funzione è *true* la parola è palindroma 
    > Altrimenti la parola non è palindroma



**Pari e Dispari** :game_die:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

**Svolgimento** 
1. Chiediamo all'utente di scegliere tra pari o dispari *userChoice*
2. Chiediamo di inserire un numero da 1 a 5 *userNumber*
3. Creiamo una funzione per generare un numero random da 1 a 5:
La funzione avrà come parametri *min* e *max* e ritonerà un number: *generatedNum*.
    1. Utilizzo math.random per generare un numero random:  *generatedNum*
    2. Ritorno il risultato: *generatedNum*
4. Sommo il risultato della funzione *generatedNum* con il numero inserito dall'utente *userNumber* : *sum*
5. Creo una funzione per stabilire se un numero è pari:
La funziona avrà come parametro *sum* e ritornerà un valore booleano.
    1. Dichiaro variabile *result* = *false*
    2. Creo condizione:
        > Se *sum* è pari *result* = *true*
    3. Ritorno *result*
6. Creo condizione per stabilire il vincitore
    > se il risultato della funzione = *true* l'utente ha vinto
    > altrimenti ha perso
