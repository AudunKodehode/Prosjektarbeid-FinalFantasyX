const finalFantasyXContainer = document.getElementById("finalFantasyXContainer");

const FFOutput = async () => {
    // const characterArray = []
    const response = await fetch(`https://www.moogleapi.com/api/v1/characters`)
    const characters = await response.json();

    for (let character of characters) {
        if (character.origin === "Final Fantasy X") {
            const characterCard = document.createElement("div");
            characterCard.classList.add("character-card");
            characterCard.innerHTML = `
            <h1 class="nameElement">${character.name}<h1>
            <p class="textElement">${character.description}</p>`

            const nameElement = document.createElement("div");
            nameElement.id = "nameElement";
            nameElement.textContent = character.name;

            const containerElement = document.createElement("div");
            containerElement.id = "containerElement";

            const imageElement = document.createElement("div");
            imageElement.id = "imageElement";
            const image = document.createElement("img");
            image.src = character.image_url;
            imageElement.appendChild(image);

            const textElement = document.createElement("div");
            textElement.id = "textElement";
            textElement.textContent = character.description;

            containerElement.appendChild(imageElement);

            characterCard.appendChild(nameElement);
            characterCard.appendChild(containerElement);
            characterCard.appendChild(textElement);

            finalFantasyXCard.appendChild(characterCard);
        }
    }
}

FFOutput();