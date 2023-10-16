const gameContainer = document.getElementById("gameContainer");
const gameSelector = document.getElementById("gameSelector");

addEventListener("DOMContentLoaded", function () {
    // initiate();
})
function initiate() {
    for (let i = 0; i < gameContainer.children.length; i++) {
        gameContainer.children[i].style.display = "none";
    }
    document.getElementById(gameSelector.value).style.display = "grid";
}



gameSelector.addEventListener("change", function () {
    for (let i = 0; i < gameContainer.children.length; i++) {
        gameContainer.children[i].style.display = "none";
    }
    gameContainer.children[gameSelector.value].style.display = "";
})
let gameCount = 0;
const FFOutput = async (gameName, divID) => {
    gameCount++;

    const response = await fetch("https://www.moogleapi.com/api/v1/characters")
    const characters = await response.json();
    const gameTypeContainer = document.createElement("div");
    gameTypeContainer.id = `${divID}Container`;
    for (let character of characters) {
        if (character.origin === gameName) {
            const characterCard = document.createElement("div");
            characterCard.classList.add(`${divID}-card`);

            // Use a try-catch block to handle potential errors when setting the image src
            try {
                characterCard.innerHTML = `
                    <h1 class="name">${character.name}</h1>
                    <div id="imageWrapper"><img src="${character.pictures[0].url}" alt=""></div>
                    <p class="age">Age: ${character.age}</p>
                    <p class="gender">Gender: ${character.gender}</p>
                    <p class="height">Height: ${character.height}</p>
                    <p class="job">Job: ${character.job}</p>
                    <p class="race">Race: ${character.race}</p>
                    <p class="description">${character.description}</p>`;
            } catch (error) {
                // Handle the error here, you can log it or display a default image
                characterCard.innerHTML = `
                    <h1 class="name">${character.name}</h1>
                    <div id="imageWrapper"><img src="/public/default.png" alt=""></div>
                    <p class="age">Age: ${character.age}</p>
                    <p class="gender">Gender: ${character.gender}</p>
                    <p class="height">Height: ${character.height}</p>
                    <p class="job">Job: ${character.job}</p>
                    <p class="race">Race: ${character.race}</p>
                    <p class="description">${character.description}</p>`;
            }

            gameTypeContainer.appendChild(characterCard);
        }

    }
    gameContainer.appendChild(gameTypeContainer);
    if (gameCount == 13) {
        initiate();
    }
}

FFOutput("Final Fantasy", "ff").then(() => {
    initiate();
})
FFOutput("Final Fantasy II", "ffII");
FFOutput("Final Fantasy III", "ffIII");
FFOutput("Final Fantasy IV", "ffIV");
FFOutput("Final Fantasy V", "ffV");
FFOutput("Final Fantasy VI", "ffVI");
FFOutput("Final Fantasy VII", "ffVII");
FFOutput("Final Fantasy VIII", "ffVIII");
FFOutput("Final Fantasy IX", "ffIX");
FFOutput("Final Fantasy X", "ffX");
FFOutput("Final Fantasy XII", "ffXII");
FFOutput("Final Fantasy XIII", "ffXIII");
FFOutput("Final Fantasy XV", "ffXV");


