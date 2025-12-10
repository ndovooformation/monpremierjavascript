console.log("##### Section - Je suis dans la boucle ###");

let nombreTour = 0;

/***
 * La boucle WHILE
 * While signifie "tant que"
 * Tant que la limite n'est pas atteinte, alors l'action s'exécute.
 * La boucle While va exécuter la même opération autant de fois que la limite n'est pas atteinte.
 * Et à chaque tour, la variable nombreTour augmente de 1 (+1)  
 */
while (nombreTour < 7){
    console.log("Tour de la maison au départ : ", nombreTour );
    nombreTour = nombreTour + 1;

    console.log("Nombre de tours Après le passage : ", nombreTour);
}

// Boucle FOR
for(let indice = 0; indice < 3; indice++) {
    console.log(" L'indice est de : ", indice);
}

// Application de la boucle For sur une liste d'élèves

let listeEleves = ["Madi-Soilihi Ben", "Oifikidine", "Houmadi Chahida", "Mchangama Mounawara", "Anrabia Said", "Anzilati Mohamed", "Nael Chamsiddine", "Yowane Mohamed Ahamada", "Madi Mlimi Nouran", "Moussa Lidya", "Rachid Mahamoudou", "Aristid-Jassem Fougeroux"];

console.log("Taille du tableau : ", listeEleves.length);
console.log(listeEleves[0]);
console.log(listeEleves[1]);
console.log(listeEleves[3]);

for(let i = 0; i < listeEleves.length; i++){
    console.log(listeEleves[i]);
}
