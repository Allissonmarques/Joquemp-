const result = document.querySelector(".result")
const onscreenChoices = document.querySelector(".humanXmachine")
const yourScore = document.querySelector("#player")
const machineScore = document.querySelector("#machine")

let humanPlayerScore = 0
let scoringMachinePlayer = 0

const playerClickedTheButton = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    onscreenChoices.innerHTML = ("Humano:" + human + " Vs " + "Máquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Empatou!"
    } 
    
    else if (
        (human === 'paper' && machine === 'stone') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'stone' && machine === 'scissors')
    )
    {
        humanPlayerScore++
        yourScore.innerHTML = humanPlayerScore
        result.innerHTML = "Você ganhou!"
    }
    
    else {
        scoringMachinePlayer++
        machineScore.innerHTML = scoringMachinePlayer
        result.innerHTML = "Você perdeu!"
    }



}
