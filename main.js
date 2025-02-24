const apiKey = "f679d30fb56bf3a1c18e9a01";
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

let fromSelcet = document.getElementById("fromCurrency");
let toSelect = document.getElementById("toCurrency");
const result = document.getElementById("result");

async function mydollar(){
    let res = await fetch(apiURL + "USD");
    let data = await res.json();
    let newRates = Object.keys(data.conversion_rates);

    newRates.forEach(car =>{
        fromSelcet.innerHTML +=  `<option value="${car}">${car}</option>`;
        toSelect.innerHTML +=  `<option value="${car}">${car}</option>`;
    });

    fromSelcet.value = "";
    toSelect.value = "";
};

async function almashtirish() {
    const amount = document.getElementById("amount").value;

    let from = fromCurrency.value;
    let to = toCurrency.value;

    let res = await fetch(apiURL + from);
    let data = await res.json();

    let rate = data.conversion_rates[to]
    let cons = Math.round(amount * rate * 100) / 100;

    result.innerHTML = `${amount} ${from} = ${cons} ${to}`;
}

window.addEventListener("load", mydollar);
