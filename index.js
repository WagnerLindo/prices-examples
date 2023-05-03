const price1El = document.querySelector("#price1");
const price2El = document.querySelector("#price2");
const price3El = document.querySelector("#price3");
const switchEl = document.querySelector("#switch");
const mensualEl = document.querySelectorAll(".mensual");
console.log(mensualEl);

const planPricesMap = {
  basic: 50,
  pro: 75,
  enterprise: 99,
};

const roundValue = Math.round(planPricesMap.enterprise * 12 * 0.4);

switchEl.addEventListener("input", (event) => {
  console.log(event.target.checked);
  if (event.target.checked === true) {
    price1El.textContent = `$${
      [planPricesMap.basic * 12] - [planPricesMap.basic * 12 * 0.4]
    } `;
    price2El.textContent = `$${
      planPricesMap.pro * 12 - [planPricesMap.pro * 12 * 0.4]
    }`;
    price3El.textContent = `$${[
      [planPricesMap.enterprise * 12] - [roundValue],
    ]}`;
    mensualEl.forEach((element) => {
      element.textContent = "/anual";
    });
  } else {
    price1El.textContent = `$${planPricesMap.basic}`;
    price2El.textContent = `$${planPricesMap.pro}`;
    price3El.textContent = `$${planPricesMap.enterprise}`;
    mensualEl.forEach((element) => {
      element.textContent = "/mensual";
    });
  }
});
