const finalFantasyXContainer = document.getElementById("finalFantasyXContainer");

const FFOutput = async () => {
    const characterArray = []
    const response = await fetch(`https://www.moogleapi.com/api/v1/characters`)
    const characters = await response.json();
    for (let character of characters) {
        if (character.origin === "Final Fantasy X") {
            characterArray.push(character)
        }
    }
    let i = 0;
    while (i < characterArray.length) {
        console.log(characterArray[i]);
        i++;
    }
}
FFOutput()