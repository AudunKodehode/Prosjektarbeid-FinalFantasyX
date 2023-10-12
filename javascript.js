const gameContainer = document.getElementById("gameContainer");

const FFOutput = async (gameName, divID) => {
    const response = await fetch("https://www.moogleapi.com/api/v1/characters")
    const characters = await response.json();
    // <div id="Final Fantasy"></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    // <div></div>
    for (let character of characters) {
        if (character.origin === gameName) {
            const characterCard = document.createElement("div");
            characterCard.classList.add("${divID}-card")
            characterCard.innerHTML = `
            <h1 class="name">${character.name}<h1>
            <div id="imageWrapper"><img src="${character.pictures[0].url}" alt=""></div>
            <p class="age">Age: ${character.age}</p>
            <p class="gender">Gender: ${character.gender}</p>
            <p class="height">Height: ${character.height}</p>
            <p class="job">Job: ${character.job}</p>
            <p class="race">Race: ${character.race}</p>
            <p class="description">${character.description}</p>`
            console.log(character)
            finalFantasyXContainer.appendChild(characterCard);
        }
    }
}

FFOutput("Final Fantasy", "ffI");
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