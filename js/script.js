/* ******************************************** */
/*                  MILESTONE 1                 */
/* ******************************************** */
// DEFINIZIONE DELLE VARIABILI E/O RECUPERO ELEMENTI DEL DOM
const km = document.getElementById("km");
const age = document.getElementById("age");
const button = document.querySelector("button");

// CORPO DEL PROGRAMMA
// al click del bottone, calcola il prezzo del biglietto
button.addEventListener("click", function () {
  // variabili
  let price = 0.21 * km.value;
  let juniorPrice = price * 0.8;
  let seniorPrice = price * 0.6;
  let userPrice = 0;


});
