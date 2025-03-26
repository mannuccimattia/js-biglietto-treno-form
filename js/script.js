/* ******************************************** */
/*                  MILESTONE 1                 */
/* ******************************************** */
// DEFINIZIONE DELLE VARIABILI E/O RECUPERO ELEMENTI DEL DOM
// recupero i campi della form
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const km = document.getElementById("km");
const age = document.getElementById("age");
const button = document.querySelector("button");

// recupero i segnaposto
const fullName = document.getElementById("full-name");
const ticketKm = document.getElementById("ticket-km");
let ticketPrice = document.getElementById("ticket-price");

// CORPO DEL PROGRAMMA
// al click del bottone, calcola il prezzo del biglietto
button.addEventListener("click", function (event) {
  event.preventDefault();
  // variabili
  let price = 0.21 * km.value;
  let juniorPrice = price * 0.8;
  let seniorPrice = price * 0.6;
  let userPrice = 0;

  // controllo l'età e stampo in console il rispettivo prezzo
  userPrice = age.value<18 ? juniorPrice
  : age.value>65 ? seniorPrice
  : price;
  console.log("Il prezzo del tuo biglietto è di",userPrice.toFixed(2).toString(), "€");

  // assegno i valori inseriti e calcolati nella card
  fullName.innerHTML = firstName.value.trim() + " " + lastName.value.trim();
  ticketKm.innerHTML = km.value + " km";
  ticketPrice.innerHTML = userPrice.toFixed(2).toString() + " €";
  // azzero i valori inseriti dall'utente nei campi input
  firstName.value = "";
  lastName.value = "";
  km.value = "";
  age.value= "";
});
