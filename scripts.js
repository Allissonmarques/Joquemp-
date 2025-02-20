const result = document.querySelector(".result")

const playerClickedTheButton = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + "Máquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Empatou!"
    } 
    
    else if (
        (human === 'paper' && machine === 'stone') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'stone' && machine === 'scissors')
    )
    {
        result.innerHTML = "Você ganhou!"
    } else {
        result.innerHTML = "Você perdeu!"
    }



}
