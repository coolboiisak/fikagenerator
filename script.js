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


