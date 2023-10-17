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
let response = "";

const FFOutput = async (gameName, divID) => {
    gameCount++;
    if (response == ""){
        response = await fetch("https://www.moogleapi.com/api/v1/characters")
    }
    const characters = await response.json();
    const gameTypeContainer = document.createElement("div");
    gameTypeContainer.id = `${divID}Container`;
    for (let character of characters) {
        if (character.origin === gameName) {
            const characterCard = document.createElement("div");
            characterCard.classList.add(`${divID}-card`);

            // Use a try-catch block to handle potential errors when setting the image src
            try {
                characterCard.id = `${divID}-${character.name}`;
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
                characterCard.id = `${divID}-${character.name}`;
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


    R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; 
    DI=document.getElementsByTagName("img"); DIL=DI.length; 
    
    function A() {
        var i;
        var DIS;
        for(i=0; i-DIL; i++){ 
            DIS=DI[ i ].style; 
            DIS.position='absolute'; 
            DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; 
            DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"
        }
        R++
    }
    setInterval('A()',5); 
    void(0);