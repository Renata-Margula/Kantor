{
  const calculateResult = (pln, currencyType) => {
    const EUR = 4.5562;
    const HUF = 1.2544;
    const GBP = 5.2655;
    const RON = 0.925;

    switch (currencyType) {
      case "EUR":
        return pln / EUR;

      case "GBP":
        return pln / GBP;

      case "HUF":
        return pln / HUF;

      case "RON":
        return pln / RON;
    }
  };

  const updateResultText = (result, currencyType) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${result.toFixed(2)} ${currencyType}`;
  }
  const onFormSubmit = (event) => {
    event.preventDefault();

    const plnElement = document.querySelector(".js-pln");
    const currencyElement = document.querySelector(".js-currency");

    const pln = +plnElement.value;
    const currencyType = currencyElement.value;

    const result = calculateResult(pln, currencyType);
    updateResultText(result, currencyType);
  };
  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
