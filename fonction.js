
/**
 * ## Les fonctions en JavaScript ###
 */

console.log("##### Section Fonction ####");


/**
 * La fonction additionner() doit additionner deux nombres 
 * et retourner le résultat de l'addition
 * La fonction additionner a besoin de deux paramètres: chiffre1 et chiffre2;
 * Ensuite, la fonction additionner additionne les deux paramètres : chiffre1 + chiffre2
 * Enfin, la fonction additionner retourne ou renvoie le résultat du calcul
 */
function additionner(chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}

// J'utilise la fonction additionner(chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommesAddition = additionner(15, 8);

console.log(" sommes1 : ", sommesAddition);

/**
 * fonction de soustraction
 * La fonction soustrait une valeur dans une autre
 * La fonction prend deux paramètres qui sont : chiffre1 et chiffre2
 * Le résultat de la soustraction est retourné
 *  */ 
function soustraire(chiffre1, chiffre2) {
    let resultat = chiffre1 - chiffre2;
    return resultat;
};

/**
 * Je fais appel à la fonction soustraire(). Je lui passe deux paramètres qui sont 15 et 8.
 * Le résultat retourné par la fonction soustraire() est stocké dans la variable resteSoustraction.
 *  */ 

let resteSoustraction = soustraire(15, 8);

console.log("resteSoustraction :", resteSoustraction);

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * La fontion multiplier prends deux paramètres : a et b.
 * Le paramètre a est multiplié par le paramètre b. Et , le résultat est stocké dans la variable resultat.
 * Enfin, la fonction retourne ou renvoit le résulat. 
 */
function multiplier(a , b){
    let resultat = a * b;
    return resultat;
}