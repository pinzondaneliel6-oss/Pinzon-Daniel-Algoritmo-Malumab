// ===============================
// LISTA BASE (ELEMENTOS DEL ALGORITMO)
// ===============================

const songs = [
    { name: "Hawái", score: 0 },
    { name: "Felices los 4", score: 0 },
    { name: "Sobrio", score: 0 },
    { name: "Borró Cassette", score: 0 },
    { name: "Corazón", score: 0 },
    { name: "Chantaje", score: 0 },
    { name: "El Perdedor", score: 0 },
    { name: "ADMV", score: 0 },
    { name: "HP", score: 0 },
    { name: "11 PM", score: 0 }
];

// ===============================
// VARIABLES DEL SISTEMA
// ===============================

let currentA;
let currentB;
let round = 0;
const maxRounds = 15;

// ===============================
// ELEMENTOS DEL DOM
// ===============================

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const rankingContainer = document.getElementById("rankingContainer");
const showRankingBtn = document.getElementById("showRanking");
const resetBtn = document.getElementById("resetRanking");
const roundInfo = document.getElementById("roundInfo");

// ===============================
// FUNCIONES PRINCIPALES
// ===============================

function getRandomSongs() {
    if (round >= maxRounds) {
        optionA.disabled = true;
        optionB.disabled = true;
        roundInfo.textContent = "Comparaciones terminadas. Mira el ranking final.";
        return;
    }

    let indexA = Math.floor(Math.random() * songs.length);
    let indexB;

    do {
        indexB = Math.floor(Math.random() * songs.length);
    } while (indexA === indexB);

    currentA = songs[indexA];
    currentB = songs[indexB];

    optionA.textContent = currentA.name;
    optionB.textContent = currentB.name;

    round++;
    roundInfo.textContent = `Ronda ${round} de ${maxRounds}`;
}

function vote(song) {
    song.score++;
    getRandomSongs();
}

function showRanking() {
    const sortedSongs = [...songs].sort((a, b) => b.score - a.score);

    rankingContainer.innerHTML = "<h2>🏆 Ranking Final</h2>";

    sortedSongs.forEach((song, index) => {
        rankingContainer.innerHTML += 
            `<p>${index + 1}. ${song.name} - ${song.score} votos</p>`;
    });
}

function resetGame() {
    songs.forEach(song => song.score = 0);
    round = 0;
    rankingContainer.innerHTML = "";
    optionA.disabled = false;
    optionB.disabled = false;
    getRandomSongs();
}

// ===============================
// EVENTOS
// ===============================

optionA.addEventListener("click", () => vote(currentA));
optionB.addEventListener("click", () => vote(currentB));
showRankingBtn.addEventListener("click", showRanking);
resetBtn.addEventListener("click", resetGame);

// ===============================
// INICIO
// ===============================

getRandomSongs();
