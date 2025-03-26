// function convert(from, to, amount) {
//     fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//         const convertedAmount = (amount * data.rates[to]).toFixed(2);
//         alert(`${amount} ${from} = ${convertedAmount} ${to}`);
//       });
//     }
  
//   convert(fromCurr, toCurr, 10);

const BASE_URL = `https://api.frankfurter.dev/v1/latest?`;

const dropdowns = document.querySelectorAll('.dropDown select'); 
const btn = document.querySelector('form button');

const fromCurr = document.querySelector('.form select');
const toCurr = document.querySelector('.to select');

const msg = document.querySelector('.msg');


window.addEventListener('load', () => {
  updateExchangeRate();
});

  for(let select of dropdowns) {
    for(currCode in countryList){
      let newOption = document.createElement('option');
      newOption.innerText = currCode;
      newOption.value = currCode;

      if(select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if(select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }

      select.prepend(newOption);
    }
    select.addEventListener('change', (evt) => {
      updateFlag(evt.target);
    });
  }

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector('img');
  img.src = newSrc;
}


btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector('.amount input');
  let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
    alert("Please enter a valid amount greater than 0.");
  }

  // console.log(fromCurr.value, toCurr.value);
  const URL = `${BASE_URL}base=${fromCurr.value}&${toCurr.value}`;
  let respone = await fetch(URL);
  let data = await respone.json();
  let t = data.base = fromCurr.value;
  // console.log(data);
  let exRate = data.rates[toCurr.value];
  // console.log(exRate);

  let finalAmount = (amtVal * exRate).toFixed(2);
  msg.innerText =  `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
