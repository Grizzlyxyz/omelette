// lieux -> Tableau
// Ce sont les endroit ou l'on va se rendre
//// Epicerie
//// Maison
//// Cuisine
//// Panier

// ingredients
/// nom, etats ( entier,coupé, moulu, melangé, ...), prix
//// Poivron
//// Oignon
//// Oeuf
//// Epices
////// Sel
////// Poivre
////// Paprika
//// Fromage
//// Huile/Beurre
//// Salami


// Personne
//// Propriétés
///// nom
///// prenom
///// age
///// humeur
///// argent
//// Methods
///// Casser_oeuf
///// Battre_Oeuf
///// Allumer_Cuisiniere
///// Se_laver_mains
///// Rajouter_ingredients
///// Payer
///// Deplacer 
///// Laver


// Cuisinière -> Objet
// Ustensiles -> Objet
//// Poele
////// etat -> proriété
////// chauffer -> method

//// Fouet
///// etat -> propriété
//// Spatule
///// etat -> propriété
//// Assiette
///// etat -> propriété (vide ,rempli,sale,propre)
//// Bol
///// etat -> propriété (vide ,rempli,sale,propre)
//// Couverts
//// etat -> sale , propre
//// Lavabo
//// etat -> vide ,rempli

let Personne = {
    nom : "Larson",
    prenom: "Nicky",
    age : 25,
    argent : 30000,
    humeur : "heureux",
};
// Ingredient.
let Poivron = {
    etat : 'couper',
    prix : 3,
};

let Oignon = {
    etat : 'haché',
    prix : 2,
};

let Paprika = {
    etat : 'poudre',
    prix : 5,
};

let Fromage = {
    etat : 'rapper',
    prix : 2,
};

let Salami =  {
    etat : 'couper',
    prix : 2,
};

let Oeuf = {
    etat : "battue",
    prix : 3,
};

// Ustensile de cuisine. 

let Fouet = {
    etat = "propre",
};

let Poele = {
    etat = "propre",
};

let Spatule = {
    etat = "propre",
};
 
