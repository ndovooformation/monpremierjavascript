// Manipulation des dates en JavaScript

// Je déclare une variable "date" qui est une instance de l'objet Date()
const maDate = new Date();

const anneeEnCours = maDate.getFullYear();

let elementSpanAnnee = document.querySelector("#annee");
elementSpanAnnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate.getMonth();
