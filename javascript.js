// const finalFantasyXCard = document.getElementById("finalFantasyXCard");

// const FFOutput = async () => {
//     const response = await fetch(`https://www.moogleapi.com/api/v1/characters`);
//     const characters = await response.json();

//     for (let character of characters) {
//         if (character.origin === "Final Fantasy X") {
//             const characterCard = document.createElement("div");
//             characterCard.classList.add("character-card");

//             const nameElement = document.createElement("div");
//             nameElement.id = "name";
//             nameElement.textContent = character.name;

//             const containerElement = document.createElement("div");
//             containerElement.id = "container";

//             const imageElement = document.createElement("div");
//             imageElement.id = "image";
//             const image = document.createElement("img");
//             image.src = character.pictures[0].url;;
//             imageElement.appendChild(image);

//             const textElement = document.createElement("div");
//             textElement.id = "textbox";
//             textElement.textContent = character.description;

//             containerElement.appendChild(imageElement);

//             characterCard.appendChild(nameElement);
//             characterCard.appendChild(containerElement);
//             characterCard.appendChild(textElement);

//             finalFantasyXCard.appendChild(characterCard);
//         }
//     }
// }

// FFOutput();


// const finalFantasyXCard = document.getElementById("finalFantasyXCard");

// const FFOutput = async () => {
//     const response = await fetch(`https://www.moogleapi.com/api/v1/characters`);
//     const characters = await response.json();

//     for (let character of characters) {
//         if (character.origin === "Final Fantasy X") {
//             const characterCard = document.createElement("div");
//             characterCard.classList.add("character-card");

//             const nameElement = document.createElement("div");
//             nameElement.id = "name";
//             nameElement.textContent = character.name;

//             const containerElement = document.createElement("div");
//             containerElement.id = "container";

//             const imageElement = document.createElement("div");
//             imageElement.id = "image";
//             const image = document.createElement("img");
//             image.src = character.pictures[0].url;
//             imageElement.appendChild(image);

//             const textElement = document.createElement("div");
//             textElement.id = "textbox";
//             textElement.textContent = character.description;

//             containerElement.appendChild(imageElement);

//             characterCard.appendChild(nameElement);
//             characterCard.appendChild(containerElement);
//             characterCard.appendChild(textElement);

//             finalFantasyXCard.appendChild(characterCard);
//         }
//     }
// }

// FFOutput();





/*Magnus JS*/

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
            <p class="age">${character.age}</p>
            <p class="gender">${character.gender}</p>
            <p class="height">${character.height}</p>
            <p class="job">${character.job}</p>
            <p class="race">${character.race}</p>
            <p class="description">${character.description}</p>`
            console.log(character)
            finalFantasyXContainer.appendChild(characterCard);
        }
    }
}

FFOutput();