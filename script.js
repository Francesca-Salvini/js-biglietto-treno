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

//output su schermo
document.getElementById("eta-utente").innerHTML = "La tua età è : " + etaUtenteNumb + " anni";

//CHILOMETRI UTENTE
//prompt per sapere quanti chilometri vuole percorrere l'utente

var chilometriUtente = prompt("Quanti chilometri vuoi percorrere?");
console.log("chilometri che vuole percorrere:", chilometriUtente);

//parseInt per lavorare con numeri interi

var chilometriUtenteNumb = parseInt(chilometriUtente);
console.log(chilometriUtenteNumb);

//output su schermo
document.getElementById("chilometri-utente").innerHTML = "La distanza che vuoi percorrere : " + chilometriUtenteNumb + " km";

//CALCOLO PREZZO BIGLIETTO

var prezzoBiglietto = chilometriUtenteNumb * 0.21;
//output del prezzo con due decimali dopo la virgola
// var prezzoBiglietto = prezzoBigliettoDec.toFixed(2);
// console.log("prezzo biglietto:" , prezzoBiglietto , "euro");

//CALCOLO SCONTI 
//minorenni

var prezzoGiovani = prezzoBiglietto - (prezzoBiglietto * 0.2); 
//output del prezzo con due decimali dopo la virgola
// var prezzoGiovani = prezzoGiovaniDec.toFixed(2);

// console.log("biglietto ridotto minorenni:", prezzoGiovani, "euro");

//over 65

var prezzoOver65 = prezzoBiglietto - (prezzoBiglietto * 0.4 );
// //output del prezzo con due decimali dopo la virgola
// var prezzoOver65 = prezzoOver65Dec.toFixed(2);

// console.log("biglietto ridotto over65:", prezzoOver65, "euro");

//CALCOLO PREZZO IN BASE ALL'ETÀ DELL'UTENTE

if(etaUtenteNumb < 18 ) {

    alert("Il tuo biglietto costa: " + prezzoGiovani + " euro");

    //output su schermo
    document.getElementById("prezzo").innerHTML = "Totale spesa : " + prezzoGiovani.toFixed(2) + " euro";
} else if (etaUtenteNumb > 65) {
    alert("Il tuo biglietto costa: " + prezzoOver65 + " euro");

    //output su schermo
    document.getElementById("prezzo").innerHTML = "Totale spesa : " + prezzoOver65.toFixed(2) + " euro";
} else {
    alert("Il tuo biglietto costa: " + prezzoBiglietto + " euro");

    //output su schermo
    document.getElementById("prezzo").innerHTML = "Totale spesa : " + prezzoBiglietto.toFixed(2) + " euro";
}


