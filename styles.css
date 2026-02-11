document.addEventListener("DOMContentLoaded", function () {

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

    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const rankingDiv = document.getElementById("ranking");
    const showRankingBtn = document.getElementById("showRanking");
    const newBattleBtn = document.getElementById("newBattle");
    const listenerTypeSelect = document.getElementById("listenerType");

    function generateBattle() {
        let indexA = Math.floor(Math.random() * songs.length);
        let indexB;

        do {
            indexB = Math.floor(Math.random() * songs.length);
        } while (indexA === indexB);

        currentA = songs[indexA];
        currentB = songs[indexB];

        optionA.textContent = currentA.name;
        optionB.textContent = currentB.name;
    }

    function vote(song) {
        const type = listenerTypeSelect.value;

        if (type === "fan") {
            song.scoreFan++;
        } else {
            song.scoreCasual++;
        }

        generateBattle();
    }

    function showRanking() {
        const type = listenerTypeSelect.value;

        let sorted = [...songs].sort((a, b) => {
            if (type === "fan") {
                return b.scoreFan - a.scoreFan;
            } else {
                return b.scoreCasual - a.scoreCasual;
            }
        });

        rankingDiv.innerHTML = "";

        sorted.forEach((song, index) => {
            let score = type === "fan" ? song.scoreFan : song.scoreCasual;
            rankingDiv.innerHTML += `
                <p>${index + 1}. ${song.name}
                <span style="float:right">${score}</span></p>
            `;
        });
    }

    optionA.addEventListener("click", () => vote(currentA));
    optionB.addEventListener("click", () => vote(currentB));
    showRankingBtn.addEventListener("click", showRanking);
    newBattleBtn.addEventListener("click", generateBattle);

    generateBattle();
});
