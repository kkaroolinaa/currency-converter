let amountElement = document.querySelector(".js-amount");
let buttonElement = document.querySelector(".js-button");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form");
let resetElement = document.querySelector(".js-buttonReset");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
});

buttonElement.addEventListener("click", (event) => {
  let amount = amountElement.value;

  let exchangeRate = amount * 4.56;

  exchangeRateElement.innerText = exchangeRate.toFixed(2);
});

resetElement.addEventListener("click", (event) => {
  formElement.reset();
});