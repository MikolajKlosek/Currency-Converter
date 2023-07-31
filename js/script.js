const amountPLN = document.querySelector(".js-amountPLN")
const selectCurrency = document.querySelector(".js-selectCurrency")
const buttonElement = document.querySelector(".js-button")
const resultElement = document.querySelector(".js-result")
const formElement = document.querySelector(".js-form")
const EUR = 4.43;
const USD = 4.02;
const AED = 1.09;
const NOK = 0.40;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountPLN.value;
    const currency = selectCurrency.value;
    let resultExchange = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "AED":
            result = amount / AED;
            break;
        case "NOK":
            result = amount / NOK;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});