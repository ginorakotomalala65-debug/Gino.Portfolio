
function changerPage(idCible) {

    //cacher les pages
    let toutesLesSections = document.querySelectorAll('.boite');
    toutesLesSections.forEach(function(boite) {
        boite.style.display = "none";
    });

    //Afficher une page
document.getElementById(idCible).style.display = "block";
}

console.log("script chargé");
// alert( 'ça ne marche toujours pas');

