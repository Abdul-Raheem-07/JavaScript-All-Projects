function rolldice() {
    const numofdice = parseInt(document.getElementById("dicenumber").value);
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        images.push(`<img src="dice-roller/images/${random}.png" alt="Dice ${random}" width="50">`);
    }

    diceresult.textContent = `You rolled: ${values.join(", ")}`;
    diceimages.innerHTML = images.join(" ");
}
