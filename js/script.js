/* ******************************************** */
/*                  MILESTONE 1                 */
/* ******************************************** */
// DEFINIZIONE DELLE VARIABILI E/O RECUPERO ELEMENTI DEL DOM
// recupero i campi della form
const km = document.getElementById("km");
const age = document.getElementById("age");
const button = document.querySelector("button");



// CORPO DEL PROGRAMMA
// al click del bottone, calcola il prezzo del biglietto
button.addEventListener("click", function (event) {
  event.preventDefault();
  // variabili
  let price = 0.21 * km.value;
  let juniorPrice = price * 0.8;
  let seniorPrice = price * 0.6;
  let userPrice = 0;

  // controllo l'età e stampo il rispettivo prezzo
  userPrice = age.value<18 ? juniorPrice
  : age.value>65 ? seniorPrice
  : price;
  console.log("Il prezzo del tuo biglietto è di",userPrice.toFixed(2).toString(), "€");

  // azzero i valori inseriti dall'utente nei campi input
  km.value = "";
  age.value= "";

  //
});
