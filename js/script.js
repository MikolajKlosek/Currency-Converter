{
    const calculateResult = (amount, currency) => {

        const EUR = 4.43;
        const USD = 4.02;
        const AED = 1.09;
        const NOK = 0.40;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "AED":
                return amount / AED;

            case "NOK":
                return amount / NOK;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountPLN = document.querySelector(".js-amountPLN")
        const selectCurrency = document.querySelector(".js-selectCurrency")

        const amount = amountPLN.value;
        const currency = selectCurrency.value;
        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}