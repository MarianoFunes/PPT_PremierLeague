const players = [
    {
    id: 1,
    img: "./img/BaileyAstonVilla.png",
    value: 86, 
},
{
    id: 2,
    img: "./img/BentancurTottenham.png",
    value: 82, 
},
{
    id: 3,
    img: "./img/DelleAlliEverton.png",
    value: 88, 
},
{
    id:4 ,
    img: "./img/EnzoCHelsea.png",
    value: 87, 
},
{
    id: 5,
    img: "./img/FlekkenBrentford.png",
    value: 82, 
},
{
    id: 6,
    img: "./img/GarnachoManUtd.png",
    value: 90, 
},
{
    id: 7,
    img: "./img/HaalandManCity.png",
    value: 97, 
},
{
    id: 8,
    img: "./img/MartinelliArsenal.png",
    value: 89, 
},
{
    id: 9,
    img: "./img/tevezLegend.png",
    value: 90, 
},
{
    id: 10,
    img: "./img/PopeNewCastle.png",
    value: 86, 
},
{
    id: 11,
    img: "./img/SalahLiverpool.png",
    value: 92, 
},
];

// CONENCTANDO EL DOM 
const player1 = document.getElementById("player1")
const playerIA = document.getElementById("player2")
const btn = document.getElementById("button")
const resultPlayer = document.getElementById("resultPlayer")
const resultIA = document.getElementById("resultIA")





// CREANDO LA FUNCIONALIDAD     

function randomFn () {


    
    // OBTENIENDO LA IMAGEN RANDOM 

    const imagesPlayersRandom = players[Math.floor(Math.random() * players.length)]
    const imagesIARandom = players[Math.floor(Math.random() * players.length)]

    //EVITANDO LA REPETICION DE LA TARJETA

    player1.innerHTML = "";
    playerIA.innerHTML = "";

// CREANDO ELEMENTO IMAGEN PARA EL PLAYER 1

const imgP =document.createElement("img")
imgP.classList.add("image")
const imgAppendPlayer = player1.appendChild(imgP)
imgP.src = imagesPlayersRandom.img 

// CREANDO ELEMENTO IMAGEN PARA EL PLAYER 2

const imgIA = document.createElement("img")
imgIA.classList.add("image")
const imgAppendIA = playerIA.appendChild(imgIA)
imgIA.src = imagesIARandom.img 

let resultado = "";
resultIA.innerHTML = "";
    
    if (imagesPlayersRandom.value < imagesIARandom.value){

        resultado = "IA Player Gana" 
     
    } 
    else if (imagesPlayersRandom.value > imagesIARandom.value) {
        
        resultado ="Player Gana"

    } 
    else { 
        resultado ="Es un empate"

}

   
    return resultIA.innerHTML += resultado

    }
    
    btn.addEventListener('click', randomFn)



