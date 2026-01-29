import { updateScore } from "./data.js"

export function loadBallons() {
    const mainEl = document.querySelector("main")
    let total = 5
    const intervalId = setInterval(() => {
        const ballon = genBalloon(mainEl)
        mainEl.appendChild(ballon)
        total -= 1
    }, 3000);
    setTimeout(() => {
        clearInterval(intervalId)
    }, 10000)
}

function genBalloon(parentEl) {
    const baloon = document.createElement("div")
    baloon.classList.add("balloon")
    setBalloonLocation(parentEl, baloon)
    baloon.addEventListener("click", (e) => {
        updateScore("red")
        baloon.remove()
    })
    return baloon
}

function setBalloonLocation(parentEl, balloonEl) {
    const p = parentEl.getBoundingClientRect();
    const c = balloonEl.getBoundingClientRect();

    const x = Math.random() * (p.width - c.width);
    const y = Math.random() * (p.height - c.height);
    balloonEl.style.left = x + "px";
    balloonEl.style.top = y + "px";
}