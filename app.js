function rollDice() {


    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const dicceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < Number(numOfDice); i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    dicceImages.innerHTML = images.join('');
}

