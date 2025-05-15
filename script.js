const questions = [
    {
        question: "Che cos'è una stampante 3D?",
        options: ["Una macchina per la stampa di documenti", "Una macchina che costruisce oggetti strato per strato", "Un dispositivo per fare disegni", "Una stampante per foto"],
        answer: 1
    },
    {
        question: "Quale materiale non viene usato nella stampa 3D?",
        options: ["PLA", "ABS", "Cartone", "PETG"],
        answer: 2
    },
    {
        question: "Che cosa è il FDM in stampa 3D?",
        options: ["Un tipo di resina", "Una tecnologia di stampa", "Una parte della stampante", "Un tipo di filamento"],
        answer: 1
    },
    {
        question: "Qual è la principale applicazione della stampa 3D?",
        options: ["Cucina", "Medicina", "Sport", "Giardinaggio"],
        answer: 1
    },
    {
        question: "Cos'è il filamento PLA?",
        options: ["Un tipo di plastica biodegradabile", "Un tipo di resina", "Un tipo di metallo", "Un tipo di carta"],
        answer: 0
    },
    {
        question: "Quale delle seguenti opzioni è un vantaggio della stampa 3D?",
        options: ["Costo basso di produzione", "Creazione di oggetti in metallo", "Impossibilità di errori", "Produzione rapida di oggetti complessi"],
        answer: 3
    },
    {
        question: "Chi ha inventato la tecnologia di stampa 3D?",
        options: ["Charles Hull", "Steve Jobs", "Elon Musk", "Bill Gates"],
        answer: 0
    },
    {
        question: "Quale è la funzione della testina di stampa?",
        options: ["Creare la base della stampa", "Riscaldare il filamento", "Spostarsi in modo verticale", "Iniettare il materiale di supporto"],
        answer: 1
    },
    {
        question: "In quale settore la stampa 3D sta avendo un grande impatto?",
        options: ["Automotive", "Moda", "Alimentare", "Tutti i precedenti"],
        answer: 3
    },
    {
        question: "Cosa significa la sigla 'SLA' nelle stampanti 3D?",
        options: ["Stampante Luminosa Assoluta", "Stereo Light Absorption", "Stereolithography", "Stampa Laser Avanzata"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-result');

function loadQuestion() {
    document.getElementById("answerError").innerHTML = '';
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestion].answer) {
        score++;
    }
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        document.getElementById("answerError").innerHTML = "Inserire una risposta prima di continuare.";
        return;
    }

    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz').style.display = 'none';
        resultElement.style.display = 'block';
    }
});

saveButton.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        const result = {
            username: username,
            score: score,
            total: questions.length
        };
        const results = [];
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
        location.replace("./leaderboard/leaderboard.html")
    } else {
        document.getElementById("nameError").innerHTML = "Inserisci un nome utente.";
    }
});

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

function setRandomBackground() {
    const images = [
        './background/image1.png',
        './background/image2.png',
        './background/image3.png',
        './background/image4.png',
        './background/image5.png',
        './background/image6.png',
        './background/image7.png',
        './background/image8.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

loadQuestion();
window.onload = function() {
    setRandomBackground();
    secret();
}
