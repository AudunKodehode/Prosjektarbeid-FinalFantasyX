const gameContainer = document.getElementById("gameContainer");
const gameSelector = document.getElementById("gameSelector");

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

const FFOutput = async (gameName, divID) => {
    const response = await fetch("https://www.moogleapi.com/api/v1/characters")
    const characters = await response.json();
    const gameTypeContainer = document.createElement("div");
    gameTypeContainer.id = `${divID}Container`;
    for (let character of characters) {
        if (character.origin === gameName) {
            const characterCard = document.createElement("div");
            characterCard.classList.add(`${divID}-card`)
            characterCard.innerHTML = `
            <h1 class="name">${character.name}<h1>
            <div id="imageWrapper"><img src="${character.pictures[0].url}" alt=""></div>
            <p class="age">Age: ${character.age}</p>
            <p class="gender">Gender: ${character.gender}</p>
            <p class="height">Height: ${character.height}</p>
            <p class="job">Job: ${character.job}</p>
            <p class="race">Race: ${character.race}</p>
            <p class="description">${character.description}</p>`
            gameTypeContainer.appendChild(characterCard);
        }
    }
    gameContainer.appendChild(gameTypeContainer);
}

FFOutput("Final Fantasy", "ffContainer");
FFOutput("Final Fantasy II", "ffIIContainer");
FFOutput("Final Fantasy III", "ffIIIContainer");
FFOutput("Final Fantasy IV", "ffIVContainer");
FFOutput("Final Fantasy V", "ffVContainer");
FFOutput("Final Fantasy VI", "ffVIContainer");
FFOutput("Final Fantasy VII", "ffVIIContainer");
FFOutput("Final Fantasy VIII", "ffVIIIContainer");
FFOutput("Final Fantasy IX", "ffIXContainer");
FFOutput("Final Fantasy X", "ffXContainer");
FFOutput("Final Fantasy XII", "ffXIIContainer");
FFOutput("Final Fantasy XIII", "ffXIIIContainer");
FFOutput("Final Fantasy XV", "ffXVContainer");