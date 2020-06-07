import { elements } from "./elements.js";

let choices = ["rock", "paper", "scissors"];

let userChoice;

let computerChoice;

let winner;

// let winningMessages = {
// 	rock: "rock crushes scissors",
// 	paper: "paper covers rock",
// 	scissors: "scissors cuts paper",
// 	tied: "nobody wins",
// };

let winningMessageRock = `<span class = "winner-choice">rock</span> crushes <span class = "loser-choice"> scissors </span>`;

let winningMessagePaper = `<span class = "winner-choice">paper</span> covers <span class = "loser-choice"> rock </span>`;

let winningMessageScissors = `<span class = "winner-choice">scissors</span> cuts <span class = "loser-choice"> paper </span>`;

let winningMessageTied = "nobody wins";

let winningMessage;

export let playTheGame = function (id) {
	setUserChoice(id);

	setComputerChoice();

	showAnimation();

	showUserChoice(userChoice);

	showComputerChoice(computerChoice);
};

export let setUserChoice = function (id) {
	userChoice = choices[id];
};

let setComputerChoice = function () {
	computerChoice = choices[Math.floor(Math.random() * 3)];
};

let showAnimation = function () {
	elements.choiceSection.querySelectorAll(".image").forEach((image) => {
		image.classList.add("animate");
	});

	setTimeout(function () {
		elements.choiceSection.querySelectorAll(".image").forEach((image) => {
			image.classList.remove("animate");
		});
	}, 900);
};

let showUserChoice = function (userChoice) {
	elements.userChoiceContainer.innerHTML = `
        <div class="${userChoice}-container image" id="0">
            <span class="uppercase text-medium text-center" style = "display: block;">your choice</span>
            <img
                src="assets/images/${userChoice}.png"
                class="${userChoice}-image choice"
                alt=""
            />
            <span class="${userChoice}-text uppercase text-medium text-center" style = "display: block;">${userChoice}</span>
        </div>
    `;
};

let showComputerChoice = function (computerChoice) {
	elements.computerChoiceContainer.innerHTML = "";

	setTimeout(function () {
		elements.computerChoiceContainer.innerHTML = `
        <div class="${computerChoice}-container image" id="0">
            <span class="uppercase text-medium text-center" style = "display: block;">my choice</span>
            <img
                src="assets/images/${computerChoice}.png"
                class="${computerChoice}-image choice"
                alt=""
            />
            <span class="${computerChoice}-text uppercase text-medium text-center" style = "display: block;">${computerChoice}</span>
        </div>
    `;

		determineWinner(userChoice, computerChoice);
	}, 1000);
};

let determineWinner = function (user, computer) {
	if (user === "rock") {
		if (computer === "paper") {
			winner = "computer";
			winningMessage = `${winningMessagePaper} i win`;
		} else if (computer === "scissors") {
			winner = "user";
			winningMessage = `${winningMessageRock} you win`;
		} else {
			winner = "tied";
			winningMessage = winningMessageTied;
		}
	}

	if (user === "paper") {
		if (computer === "rock") {
			winner = "user";
			winningMessage = `${winningMessagePaper} you win`;
		} else if (computer === "scissors") {
			winner = "computer";
			winningMessage = `${winningMessageScissors} i win`;
		} else {
			winner = "tied";
			winningMessage = winningMessageTied;
		}
	}

	if (user === "scissors") {
		if (computer === "rock") {
			winner = "computer";
			winningMessage = `${winningMessageRock} i win`;
		} else if (computer === "paper") {
			winner = "user";
			winningMessage = `${winningMessageScissors} you win`;
		} else {
			winner = "tied";
			winningMessage = winningMessageTied;
		}
	}

	elements.result.innerHTML = winningMessage;
};
