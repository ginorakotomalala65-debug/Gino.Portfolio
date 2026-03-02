
function changerPage(idCible) {

    //cacher les pages
    let toutesLesSections = document.querySelectorAll('.boite');
    toutesLesSections.forEach(function(boite) {
        boite.style.display = "none";
    });

    //Afficher une page
document.getElementById(idCible).style.display = "block";
}

// color activer
const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
    btn.addEventListener("click"), function(){
        buttons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    };
});

