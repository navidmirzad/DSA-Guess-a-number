"use strict";

window.addEventListener("load", start);

let number;

function start() {
    console.log("JavaScript is running");
    number = generateRandomNumber();
    document.querySelector("#guess-form")
    addEventListener("submit", receiveGuess);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
}

function receiveGuess(event) {
    event.preventDefault();

    const form = event.target;
    const value = form.guess.valueAsNumber;

    console.log("received guess");
    console.log(value);
    checkGuess(value);
}

function checkGuess(guess) {
    if (guess === number ) {
        guessIsCorrect(guess) 
    } else if (guess < number) {
        guessIsTooLow(guess) 
    } else {
        guessIsTooHigh(guess);
    }
}

function guessIsCorrect(guess) {
    console.log("Correct");
    const list = document.querySelector("#guess-list");
    const html = `<li><p>You guessed ${guess} - Right on!</p></li>`
    list.insertAdjacentHTML("beforeend", html)
}

function guessIsTooLow(guess) {
    console.log("Too low");
    const list = document.querySelector("#guess-list");
    const html = `<li><p>You guessed ${guess} - Low go higher, try again</p></li>`
    list.insertAdjacentHTML("beforeend", html)
}

function guessIsTooHigh(guess) {
    console.log("Too high");
    const list = document.querySelector("#guess-list");
    const html = `<li><p>You guessed ${guess} - High go lower, try again</p></li>`
    list.insertAdjacentHTML("beforeend", html)
}