function analyserPhrase(phrase) {
    // S'assurer que la phrase se termine par un point
    if (phrase[phrase.length - 1] !== '.') {
        console.log("La phrase doit se terminer par un point.");
        return;
    }

    // Initialisation des compteurs
    let longueur = 0;
    let nombreDeMots = 0;
    let nombreDeVoyelles = 0;
    const voyelles = 'aeiouyAEIOUY'; // Inclut les voyelles majuscules et minuscules

    // Parcours de chaque caractère de la phrase
    for (let i = 0; i < phrase.length; i++) {
        const caractere = phrase[i];

        // Compter la longueur
        longueur++;

        // Compter les mots
        if (caractere === ' ' && i > 0 && phrase[i - 1] !== ' ') {
            nombreDeMots++;
        }

        // Compter les voyelles
        if (voyelles.includes(caractere)) {
            nombreDeVoyelles++;
        }
    }

    // Le dernier mot doit être compté, donc on ajoute 1 si la phrase n'est que des espaces
    if (longueur > 1 && phrase[0] !== ' ') {
        nombreDeMots++;
    }

    // Affichage des résultats
    console.log("Longueur de la phrase :", longueur);
    console.log("Nombre de mots :", nombreDeMots);
    console.log("Nombre de voyelles :", nombreDeVoyelles);
}

// Exemple d'utilisation
analyserPhrase("Bonjour tout le monde.");
