// Ici, je rédige mon script JavaScript
console.log("=== Je suis dans le code JavaScript ==");
let salutation = "Bonjour tout le monde!";

console.log(salutation);

// Je déclare un tableau
let tableauEleves = ["Amina", "Bacar", "Salim", "Abdou"];
// J'afiiche le tableau : montrer les membres du tableau
    
console.log(tableauEleves);

console.log(tableauEleves[0]); // J'affiche le 1er membre du tableauEleves 

// Je définis un objet qui représente un joueur de football professionnel
let joueurProfessionnel = {
    nom: "Zinédine", // la proriété "nom" désigne le nom du joueur
    prenom: "Yazid Zidane", // la proriété "prenom" désigne le prénom du joueur
    nationalite: ["Française", "Algérienne"], // la propriété "nationalite" indique les nationalités du joueur
    dateNaissance: 23061972, // la proriété "dateNaissance" désigne la date de naissance du joueur
    taille: 1.85,
    piedFort: "Droit",
    poste : "Milieu offensif"
};

// J'affiche l'ensemble de l'objet joueurProfessionnel
console.log(joueurProfessionnel);

// J'affiche le nom de l'objet joueurProfessionnel
console.log(joueurProfessionnel.nom);

// J'affiche le prénom de l'objet joueurProfessionnel
console.log(joueurProfessionnel.prenom);

// J'affiche la première nationalité de l'objet joueurProfessionnel
console.log(joueurProfessionnel.nationalite[0]);
