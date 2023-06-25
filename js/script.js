let amountElement = document.querySelector(".js-amount");
let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let resetElement = document.querySelector(".js-buttonReset");
resultElement.innerText = "N/A";

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let result = amount * 4.56;
    resultElement.innerText = result.toFixed(2);
});


resetElement.addEventListener("click", (event) => {
    formElement.reset();
    resultElement.innerText = "N/A";
});


