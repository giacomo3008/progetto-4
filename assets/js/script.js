document.addEventListener("scroll", () => {
    const header = document.getElementsByTagName("header")[0];
    const hero = document.getElementsByClassName("hero")[0];

    // Controlla la posizione della section hero
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 50) {
        // Cambia colore quando si scorre oltre hero
        header.style.backgroundColor = "white";
    } else {
        // Ripristina il colore originale 
        header.style.backgroundColor = "#ffc017";
    }
});