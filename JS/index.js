function changeDiceGame() {
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    let changeDice1 = document.querySelector(".img1").setAttribute("src", `images/dice${randomNum1}.png`);
    let changeDice2 = document.querySelector(".img2").setAttribute("src", `images/dice${randomNum2}.png`);

    if (randomNum1 == randomNum2) {
        document.querySelector("h1").textContent = "Draw";
    }

    else if (randomNum1 > randomNum2) {
        document.querySelector("h1").textContent = "player 1 Won";
    }

    else {
        document.querySelector("h1").textContent = "player 2 Won";

    }
}