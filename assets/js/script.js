document.addEventListener("scroll", () => {
    const header = document.getElementsByTagName("header")[0];
    const hero = document.getElementsByClassName("hero")[0];

    // Controlla la posizione della prima sezione rispetto alla viewport
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 50) {
        // Cambia colore quando si scorre oltre la sezione
        header.style.backgroundColor = "white";
    } else {
        // Ripristina il colore originale quando si torna indietro
        header.style.backgroundColor = "#ffc017";
    }
});