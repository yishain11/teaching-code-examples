export function updateScore(ballonType) {
    const scoreContainer = document.querySelector("span#score")
    let currentScore = Number(scoreContainer.textContent)
    switch (ballonType) {
        case "red":
            currentScore += 10

            break;

        default:
            break;
    }
    scoreContainer.textContent = currentScore
}