//Chiedi all'utente il numero di chilometri che vuole percorrere e la sua età

//Calcola il prezzo del biglietto del treno (0.21 euro al km)

//Calcola lo sconto sul prezzo base del biglietto del treno 

//(20% di sconto ai minorenni e 40% di sconto per gli over 65)


//ETÀ UTENTE
//prompt per sapere gli anni dell'utente 

var etaUtente = prompt ("Quanti anni hai?");
console.log("età utente:", etaUtente);

//parseInt per lavorare con numeri interi 

var etaUtenteNumb = parseInt(etaUtente);
console.log(etaUtenteNumb);


//CHILOMETRI UTENTE
//prompt per sapere quanti chilometri vuole percorrere l'utente

var chilometriUtente = prompt("Quanti chilometri vuoi percorrere?");
console.log("chilometri che vuole percorrere:", chilometriUtente);

//parseInt per lavorare con numeri interi

var chilometriUtenteNumb = parseInt(chilometriUtente);
console.log(chilometriUtenteNumb);

//CALCOLO PREZZO BIGLIETTO

var prezzoBiglietto = chilometriUtenteNumb * 0.21
console.log("prezzo biglietto:" , prezzoBiglietto , "euro");

//CALCOLO SCONTI 
//minorenni

var prezzoGiovani = prezzoBiglietto - (prezzoBiglietto * 0.2); 
console.log("biglietto ridotto minorenni:", prezzoGiovani, "euro");

//over 65

var prezzoOver65 = prezzoBiglietto - (prezzoBiglietto * 0.4 );
console.log("biglietto ridotto over65:", prezzoOver65, "euro");

//CALCOLO PREZZO IN BASE ALL'ETÀ DELL'UTENTE

if(etaUtenteNumb < 18 ) {

    alert("Il tuo biglietto costa: " + prezzoGiovani + " euro");
} else if (etaUtenteNumb > 65) {
    alert("Il tuo biglietto costa: " + prezzoOver65 + " euro");
} else {
    alert("Il tuo biglietto costa: " + prezzoBiglietto + " euro");
}
