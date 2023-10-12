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
            <h1 class="nameElement">${character.name}<h1>
            <div id="imageWrapper"><img src="${character.pictures[0].url}" alt=""></div>
            <p class="age">${character.age}</p>
            <p class="gender">${character.gender}</p>
            <p class="height">${character.height}</p>
            <p class="job">${character.job}</p>
            <p class="race">${character.race}</p>
            <p class="description">${character.description}</p>`
            console.log(character)

            const nameElement = document.createElement("div");
            nameElement.id = "nameElement";
            nameElement.textContent = character.name;

            const containerElement = document.createElement("div");
            containerElement.id = "containerElement";

            const imageElement = document.createElement("div");
            imageElement.id = "imageElement";
            const image = document.createElement("img");
            image.src = character.image_url;

            const description = document.createElement("div");
            description.id = "description";
            description.textContent = character.description;

            finalFantasyXContainer.appendChild(characterCard);
        }
    }
}

FFOutput();