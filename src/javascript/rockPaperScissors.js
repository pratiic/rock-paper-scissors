import { elements } from "./elements.js";

let choices = ["rock", "paper", "scissors"];

let userChoice;

let computerChoice;

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
	}, 1000);
};
