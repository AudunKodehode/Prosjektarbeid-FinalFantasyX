const gameSelector = document.getElementById("gameSelector");
const gameContainer = document.getElementById("gameContainer");

addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < gameContainer.children.length; i++) {
        gameContainer.children[i].style.display = "none";
    }
    document.getElementById(gameSelector.value).style.display = "flex";
    })

gameSelector.addEventListener("change", function () {
    for (let i = 0; i < gameContainer.children.length; i++) {
        gameContainer.children[i].style.display = "none";
    }
    gameContainer.children[gameSelector.value].style.display = "flex";
})