const finalFantasyXCard = document.getElementById("finalFantasyXCard");

const FFOutput = async () => {
    const response = await fetch(`https://www.moogleapi.com/api/v1/characters`);
    const characters = await response.json();

    for (let character of characters) {
        if (character.origin === "Final Fantasy X") {
            const characterCard = document.createElement("div");
            characterCard.classList.add("character-card");

            const nameElement = document.createElement("div");
            nameElement.id = "name";
            nameElement.textContent = character.name;

            const containerElement = document.createElement("div");
            containerElement.id = "container";

            const imageElement = document.createElement("div");
            imageElement.id = "image";
            const image = document.createElement("img");
            image.src = character.pictures[0].url;;
            imageElement.appendChild(image);

            const textElement = document.createElement("div");
            textElement.id = "textbox";
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