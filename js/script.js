/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po' scocciante
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… */

/* BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */


var bombe = [];
var tentativo = [];
var maxTentativi;
maxTentativi = 84;

//sono riuscita a finire l'esercio solo guardando il video della mattina, mi ero bloccata all'if del secondo while
//ho provato una soluzione alternativa annidando due if (non so se è corretto, ma il risultato mi tornava!)
//PROVA parte BONUS, per finire questa parte, dovrei togliere a tutti 16, facendo una var estena

do {
    var sceltaDifficoltà = parseInt(prompt("Scegli il grado di difficoltà inserendo:\n 0 : facile\n 1 : Medio \n 2 : Difficile"));
}while (isNaN(sceltaDifficoltà) || sceltaDifficoltà > 2 || sceltaDifficoltà < 0);

switch (sceltaDifficoltà) {
    case 0:
        maxTentativi = 100
        break;
    case 1: 
        maxTentativi = 80
        break;
    case 2: 
        maxTentativi = 50
        break;
    default:
        text = "Non hai scelto nessuna delle possibili opzioni"
}
console.log(maxTentativi);
console.log(sceltaDifficoltà);

//FUNZIONE per generare numeri casuali tra 1 e 100
function generatoreNumeriCasuali (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//FUNZIONE per far si che i numeri non possono essere duplicati, utente non può inserire lo stesso numero
function inUnArray (elemento, array) {

    for (var i = 0; i < array.length; i++ ) {
        //console.log(i);

        if (array[i] == elemento) {
            return true;
        }
    }
    return false
}

while (bombe.length < 16) {

    //i numeri generati casualamente non devono essere uguali tra di loro
    var numero = generatoreNumeriCasuali(1 , 100);
    //console.log(generatoreNumeriCasuali(1 , 100));

    //i numeri generati casualamente non devono essere uguali tra di loro
    //per eseguire quello dentro le parentesi la condizione deve essere vera
    if (inUnArray(numero, bombe) == false) {
        bombe.push(numero);
        //console.log("dentro if ", bombe.length);
    }

}

console.log("Array BOMBE ", bombe);

var gameOver = false;

while (tentativo.length < maxTentativi && gameOver == false){

    /* L'utente non può inserire più volte lo stesso numero.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero. */

        var numeroUtente = parseInt(prompt("Inserisci qui un numero da 1 a " + maxTentativi));
        console.log(numeroUtente);

        //come faccio a verificare se ho perso o no
        //quando il mio numeroUtente è uguale ad un numero dell'array Bombe
        if (inUnArray(numeroUtente, bombe)) {
            gameOver = true;
            console.log("Hai perso" + "Punteggio " + tentativo.length);
            //console.log(numeroUtente);
            //console.log(bombe);
        } else if (inUnArray(numeroUtente, tentativo) == false) {
            tentativo.push(numeroUtente);
            console.log("Non hai preso la bomba" + "Punteggio " + tentativo.length)
        } 
        console.log(numeroUtente, tentativo.length);
        
}
console.log(tentativo);
//se fai 10 tentativi senza beccare la bomba vinci
if (tentativo.length == maxTentativi){
    console.log("Hai Vinto");
} 


//SOLUZIONE ALTERNATIVA
/* while (tentativo.length < 10){

    L'utente non può inserire più volte lo stesso numero.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.

        var numeroUtente = parseInt(prompt("Inserisci qui un numero da 1 a 100"));
        console.log(numeroUtente);

        if (inUnArray(numeroUtente, tentativo) == false) {
            tentativo.push(numeroUtente);
            console.log(tentativo);

            //Ho annidato un if dentro un altro if

            if (inUnArray(numeroUtente, bombe) == false) {
                console.log("non ho trovato una bomba e vado avanti" + " " + "Punteggio " + tentativo.length);
            } else {
                console.log("Ho trovato la bomba" + " " + "Punteggio " + tentativo.length);
                break;
            }
        }

}
 */
