
/* Je récupère un élément (une balise) situé dans le fichier HTML (calcul_age.html). 
La méthode getElementById() permet de capturer un élélment par son identifiant.
J'utilise l'idenfiant pour trouver le bon élément.
L'élément récupéré est ensuite stocké dans la variable elementBoutonValider

*/
let elementBoutonValider = document.getElementById("boutonValider");

// J'affiche l'élément récupéré dans la console.
console.log(elementBoutonValider);

console.log(elementBoutonValider.nodeName);

let elementInputNom = document.querySelector("#nom");

console.log(elementInputNom);

console.log(document.head);

console.log(document.title);

// Je récupère l'élément HTML (balise) dont l'identifiant est recensement
let elementDivRecensement = document.querySelector("#recensement");

console.log(elementDivRecensement);


let elementPRecensement = document.querySelector("#paragraphe1");

console.log(elementPRecensement);

// je récupère la liste des communes de Mayotte, 
// puis je stocke les communes dans la varibale elementListCommunes
let elmentListCommunes = document.querySelector("#listCommunes");

// Ensuite, j'affiche la variable elmentListCommunes
console.log(elmentListCommunes);

// J'uilise la boucle For pour parcourir la liste elmentListCommunes
for(let i = 0; i < elmentListCommunes.length; i= i+1) {
    console.log("#### Liste communes ##### ");
    console.log(elmentListCommunes[i]);
}

// J'utilise QuerySelectorAll pour récupèrer tous les membres de la même classe
let elementClassCommune = document.querySelectorAll(".commune");
console.log("elementClassCommune : ", elementClassCommune);

for(let i = 0; i < elementClassCommune.length; i++) {
    console.log(elementClassCommune[i]);
    console.log(elementClassCommune[i].innerText);
}

/**
 * J'insère des balises dans le fichier HTML grâce au code JavaScript
 */
// je crée un élement (balise) nommé <section>
let elementSection = document.createElement("section");

// Je récupère la balise <body> , puis je stocke <body> dans la variable elementBody.
let elementBody = document.querySelector('body');


elementBody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3");

nouveauTitre.textContent = "Mon titre de la section";

elementSection.appendChild(nouveauTitre);


let elementMaman = document.createElement('maman');

elementBody.appendChild(elementMaman);

/**
 * J'insère une image dans mon fichier DOM HTML
 */
let elementImage = document.createElement('img');
elementImage.src ='oiseaupecheur.jpeg';
elementImage.setAttribute("alt","Mon oiseau pêcheur");
elementImage.className ="image-oiseau";
elementImage.classList.add("image", "image3");

// supprimer une classe de l'élément img
elementImage.classList.remove("image3");

elementBody.appendChild(elementImage);