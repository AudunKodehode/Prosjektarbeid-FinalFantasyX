const finalFantasyXContainer = document.getElementById("finalFantasyXContainer");

const FFOutput = async () => {
    const characterArray = []
    const response = await fetch("https://www.moogleapi.com/api/v1/characters")
    const characters = await response.json();

    for (let character of characters) {
        if (character.origin === "Final Fantasy X") {
            const characterCard = document.createElement("div");
            characterCard.classList.add("character-card");
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

FFOutput();