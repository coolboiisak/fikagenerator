const fikaList = [
    "Kanelbulle",
    "Chokladboll",
    "Prinsesstårta",
    "Kärleksmums",
    "Semla",
    "Kladdkaka",
    "Morotskaka",
    "Vaniljbulle",
    "Mazarin",
    "Biskvi"
];

document.getElementById("generate-btn").addEventListener("click", function() {
    const randomFika = fikaList[Math.floor(Math.random() * fikaList.length)];
    document.getElementById("result").textContent = "Ditt fika: " + randomFika;
});


document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Ändra knappens text
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = " Light Mode";
    } else {
        this.textContent = " Dark Mode";
    }
});
