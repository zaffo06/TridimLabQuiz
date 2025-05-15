window.onload = function() {
    const leaderboardTable = document.getElementById('leaderboard-table').getElementsByTagName('tbody')[0];

    const results = JSON.parse(localStorage.getItem('results')) || [];

    results.sort((a, b) => b.score - a.score);

    results.forEach((result, index) => {
        const row = leaderboardTable.insertRow();
        const positionCell = row.insertCell(0);
        const usernameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);

        positionCell.textContent = "#" + (index + 1);
        usernameCell.textContent = result.username;
        scoreCell.textContent = result.score + '/' + result.total;
    });

    if (results.length === 0) {
        leaderboardTable.innerHTML = "<tr><td colspan='3'>Nessun risultato disponibile.</td></tr>";
    }
    setRandomBackground();
    secret();
};

function setRandomBackground() {
    const images = [
        '../background/image1.png',
        '../background/image2.png',
        '../background/image3.png',
        '../background/image4.png',
        '../background/image5.png',
        '../background/image6.png',
        '../background/image6.png',
        '../background/image6.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

const button = document.getElementById("secret");
button.addEventListener("click", function() {
    const currentBackground = window.getComputedStyle(document.body).backgroundImage;
    if (currentBackground.includes('image5.png')) {
        alert("Bonini Gabriele");
    } else {
    }
});

function secret() {
    const element = document.body;
    const secret = document.getElementById("secret");
    const bgImage = window.getComputedStyle(element).backgroundImage;
    if (bgImage.includes('image5.png')) {
        secret.style.display = "block";
        secret.style.position = "absolute";
        secret.style.top = "680px";
        secret.style.right = "290px";
        secret.style.width = "100px";
        secret.style.height = "100px";
        secret.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
