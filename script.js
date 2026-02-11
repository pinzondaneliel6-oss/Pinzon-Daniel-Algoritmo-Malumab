// =============================
// BASE DEL ALGORITMO (CourseMash adaptado a MALUMA)
// =============================

const songs = [
    { name: "Hawái", scoreFan: 0, scoreCasual: 0 },
    { name: "Felices los 4", scoreFan: 0, scoreCasual: 0 },
    { name: "Sobrio", scoreFan: 0, scoreCasual: 0 },
    { name: "Borró Cassette", scoreFan: 0, scoreCasual: 0 },
    { name: "Corazón", scoreFan: 0, scoreCasual: 0 },
    { name: "Chantaje", scoreFan: 0, scoreCasual: 0 },
    { name: "El Perdedor", scoreFan: 0, scoreCasual: 0 },
    { name: "ADMV", scoreFan: 0, scoreCasual: 0 },
    { name: "HP", scoreFan: 0, scoreCasual: 0 },
    { name: "11 PM", scoreFan: 0, scoreCasual: 0 }
];

let currentA, currentB;
let listenerType = "";

// =============================
// INICIO
// =============================

function startApp(type) {
    listenerType = type;

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    document.getElementById("listenerType").value = type;

    generateBattle();
}

// =============================
// COMPARACIÓN A/B
// =============================

function generateBattle() {
    let indexA = Math.floor(Math.random() * songs.length);
    let indexB;

    do {
        indexB = Math.floor(Math.random() * songs.length);
    } while (indexA === indexB);

    currentA = songs[indexA];
    currentB = songs[indexB];

    document.getElementById("optionA").textContent = currentA.name;
    document.getElementById("optionB").textContent = currentB.name;
}

function vote(song) {
    if (listenerType === "fan") {
        song.scoreFan++;
    } else {
        song.scoreCasual++;
    }

    generateBattle();
}

document.getElementById("optionA").addEventListener("click", () => vote(currentA));
document.getElementById("optionB").addEventListener("click", () => vote(currentB));

// =============================
// RANKING
// =============================

function showRanking() {
    let sorted;

    if (listenerType === "fan") {
        sorted = [...songs].sort((a, b) => b.scoreFan - a.scoreFan);
    } else {
        sorted = [...songs].sort((a, b) => b.scoreCasual - a.scoreCasual);
    }

    const rankingDiv = document.getElementById("ranking");
    rankingDiv.innerHTML = "";

    sorted.slice(0, 10).forEach((song, index) => {
        let score = listenerType === "fan" ? song.scoreFan : song.scoreCasual;
        rankingDiv.innerHTML += `<p>${index + 1}. ${song.name} <span style="float:right">${score}</span></p>`;
    });
}
