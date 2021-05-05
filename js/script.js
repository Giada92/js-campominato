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


var bombe = [];
var tentativo = [];
//FYNZIONE per generare numeri casuali tra 1 e 100
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


//Il computer deve generare 16 numeri casuali tra 1 e 100.
/* for (var i = 0; i < 16; i++) {

    var numero = generatoreNumeriCasuali(1 , 100);
    //console.log(generatoreNumeriCasuali(1 , 100));
    console.log(i);
    
    do {
        //i numeri generati casualamente non devono essere uguali tra di loro
        if (inUnArray(numero, bombe) == false) {
        bombe.push(numero);
        console.log("dentro if ", i);
        console.log("dentro if ", bombe.length);
        }
    //devono rimanere dentro al ciclo fino a quando raggiungo array di 16
    //fino a che è vera deve restare dentro
    //una volta falsa esce e continua il codice
    } while(bombe.length < 16);  
} */

while (bombe.length < 16) {

    var numero = generatoreNumeriCasuali(1 , 100);
    //console.log(generatoreNumeriCasuali(1 , 100));

    if (inUnArray(numero, bombe) == false) {
        bombe.push(numero);
        console.log("dentro if ", bombe.length);
    }

}

console.log(bombe);