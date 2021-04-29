let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.5562;
let HUF = 1.2544;
let GBP = 5.2655;
let RON = 0.925;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let pln = +plnElement.value;
  let currencyType = currencyElement.value;
  let result;
  switch (currencyType) {
    case "EUR":
      result = pln / EUR;
      break;
    case "GBP":
      result = pln / GBP;
      break;
    case "HUF":
      result = pln / HUF;
      break;
    case "RON":
      result = pln / RON;
      break;
  }
  resultElement.innerHTML = `${result.toFixed(2)} ${currencyType}`;
});
