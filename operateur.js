
// Addition

let prixUnitaire = 13;
let valeurAjoutee = 7;
let valeurReduction = 5;
let valeurDivision = 4;

// Première technique d'additionner des nombres
let prixAdditionne1 = 3+7;

// j'affiche la valeur de la variable prixAdditionne1
console.log("prixAdditionne1 : ", prixAdditionne1);

// Deuxième méthode d'additionner des nombres à l'aide variables
let prixAdditionne2 = prixUnitaire + valeurAjoutee;

console.log("prixAdditionne2 : ", prixAdditionne2);

// Addition des chaines de caractères
// Exemple : "Fatima " + "Amina"; Résultat attendu est "Fatima Amina"
let eleve1 = "Fatima";
let eleve2 = "Amina";

/* Je concatène deux variables
Résultat attendu : "FatimaAmina"
*/
console.log(eleve1 + eleve2);

/* Je concatène deux variables. 
Et j'ajoute un espace entre les deux variables.
Résultats attendu : "Fatima Amina"
*/
console.log(eleve1 +" "+ eleve2);

/*
Je concatène deux variables. 
Et, je les stocke dans une autre vairable.

*/ 
let eleveCombo = eleve1 + " " + eleve2;

console.log("eleveCombo : ", eleveCombo);

/* 
    ##### Soustraction - ####
*/
let prixReduit = prixUnitaire - valeurReduction;

console.log("prix réduit: ", prixReduit + " €");

/**
 *  #### Multiplication *   ###
 * Le signe * permet de multiplier des nombres.
 * attention: il ne faut pas utiliser le signe x pour la multiplication
 */
let prixMultiplie = prixUnitaire * valeurAjoutee;
console.log("prix multiplié : ", prixMultiplie);

/**
 * ### Division /  ###
 * Le signe / permet de diviser des nombres
 */
let prixDivise = prixUnitaire / valeurDivision;

console.log("résultat du Prix divisé : ", prixDivise);

/**
 * Les opérateurs de comparaison
 * Nous allons comparer les valeurs stocker dans les variables.
 * Allons-y!
 */

console.log("### Section Comparaison ###");
let village = "Mamoudzou";
let commune = "MAMOUDZOU";

/**
 * Je vérifie que les deux variables ont la même valeur.
 * Le == (double égal) permet de comparer l'égalité des valeurs
 *  */ 
console.log(village == commune);
/**
 * Je vérifie que les deux variables ont :
 * - la même valeur
 * - le même type de valeur
 * 
 * Le signe === (triple égale) permet de comparer les valeurs et le type de données.
 * Les types de données sont :
 * - string (chaîne de caractères)
 * - number (nombre)
 * - bollean (booléen) soit true ou false
 * - array (tableau)
 * - object (objet)
 */
console.log(village === commune);

/**
 * Signe > signifie : "supérieur à" ou bien "plus grand que"
 *  
 */
let age = 12;
let distanceParcourue = 5;

// Est-ce que l'age est supérieur à la distance parcourue?
console.log(age > distanceParcourue);

// Est-ce que l'âge est inférieur à la distance parcourue?
console.log(age < distanceParcourue);

// Est-ce l'âge est supérieur à ou égal à la distance parcourue
console.log(age >= distanceParcourue);

// Est-ce que l'âge est inférieur ou égal à la distance
console.log( age <= distanceParcourue);

// Est-ce le village est différent de la communue?
console.log(village != commune);

// Est-ce la communue est strictement différent du village?
console.log(village !== commune);

//
//
//
/*
refre
reegve
cejcreve
*/