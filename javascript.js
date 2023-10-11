
const finalFantasyXContainer = document.getElementById("finalFantasyXContainer");

const FFOutput = async () => {
    const characterArray = []
    const response = await fetch(`https://www.moogleapi.com/api/v1/characters`)
    const data = await response.json();
    console.log(data);
    data.forEach(element => {
        if (element.origin === "Final Fantasy X") {
            characterArray.push(element)
        }
    })
    console.log(characterArray)
    // finalFantasyXContainer.innerHTML = data
    // .map(())
}
FFOutput()

