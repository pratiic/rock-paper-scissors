import { elements } from "./elements.js";
import { playTheGame } from "./rockPaperScissors.js";

elements.choiceSection.addEventListener("click", (event) => {
	if (event.target.classList.contains("choice")) {
		playTheGame(event.target.parentNode.id);
	}
});

elements.resetButton.addEventListener("click", () => {
	location.reload();
});
