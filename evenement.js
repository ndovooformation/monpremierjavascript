/**
 * Je programmes les événments qui sont déclanchés du cpoté HTML
 */

const elementBoutonValiderDate = document.querySelector("#validerDate");

let elementSpanDateDuJour = document.querySelector("#dateDuJour");
let elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

// Je déclare un objet date en utilisant la classe Date()
const maDate = new Date();

// mon événement "click"
elementBoutonValiderDate.addEventListener("click", function() {
    // Je décris l'action à réaliser lorsque je clique sur le bouton valider
    // 
    elementSpanDateDuJour.innerHTML = maDate;
    elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();

});

// 
/**
 * mon evenement "Keydown"
 * Je code un évenement de type KEYDOWN.
 * L'évenement KEYDOWN va se déclencher lorsque j'appuie sur une touche de mon clavier.
 */

// 1. Tout d'abord, je récupère l'élement HTML qu sera associé à l'évenement KEYDOWN
let  elementBoutonFonctionFleche = document.querySelector("#boutonFleche");

// 2. J'associe l'événement KEYDOWN mon élément HTML en utilisant la méthode addEventListener(). A l'intérieur de la méthod eAddEvent Listener(), je passe une fonction fléchée comme suit '() => {}'.
elementBoutonFonctionFleche.addEventListener("keydown", (event) => {
    console.log("==== Je suis dans l'événement KEYDOWN ===");
    console.log("Clé event : ", event.key);
});


/**
 * mon evenement "change"
 * Je code un évenement de type CHANGE.
 * L'évenement CHANGE va se déclencher lorsque je remplis le champ en tapant sur les touches du clavier.
 */

// 1. Tout d'abord, je récupère l'élement HTML qu sera associé à l'évenement CHANGE. 
let elementInputNomForm = document.querySelector("#nom");

// 2. J'associe l'événement CHANGE à mon élément HTML en utilisant la méthode addEventListener(). A l'intérieur de la méthode AddEvent Listener(), je passe une fonction fléchée comme suit '() => {}'. La fonction fléchée prend le paramètre event.

let messageSalutation; // Je déclare une variable vide.
let messageAge;
let ageTrouve;

let elmentSpanNomUtilisateur = document.querySelector("#nomUtilisateur"); 

let elementInputAnneeNaissance = document.querySelector("#annee_naissance");

let elementSpanMessageAge = document.querySelector("#age_calcule");

const aujourdhui = new Date();

// Fonction de calcule de l'âge
function calculAge(anneeNaissance) {
    return aujourdhui.getFullYear() - anneeNaissance;
}



elementInputNomForm.addEventListener("change", (event) => {
    messageSalutation = `Bonjour ${event.target.value}, `;
    elmentSpanNomUtilisateur.textContent = messageSalutation;
});

elementInputAnneeNaissance.addEventListener("change", (event) => {
    console.log("#### EVENT : ", event.target.value);
    messageAge = `Vous êtes âgé de ${calculAge(event.target.value)} ans`;
    elementSpanMessageAge.textContent = messageAge;
});

function verifierAge(monAge) {
    if(monAge < 18) {
        let elementSpanMajorite = document.querySelector("#majorite");
    }
}
/**
 * Envoyer le formulaire
 * Je vais récupérer les données saisies sur le formulaire:
 *  - nom
 *  - prénom
 *  - situation
 *  - année de naissance
 */

// Je récupère la balise <form> </form> avec ses enfants; Ensuite, je stocke la balise dans la variable elmentForm.
let elementForm = document.querySelector('form');


// J'associe l'événement 'submit'
elementForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("#### Je suis 'évenement Submit du formulaire");

    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;

    console.log("NOM saisi :" , nom, " Prénom saisi: ", prenom);
    
});