const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');
function calculate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/d6b1de5392facc618c0e1b78/latest/${c1.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      a2.value = a1.value * data.conversion_rates[c2.value]
      rate.innerText = `In ${a1.value} ${c1.value} there are ${a2.value} ${c2.value}`;
    });
}

c1.addEventListener("change", calculate);
c2.addEventListener("change", calculate);
a1.addEventListener("input", calculate);
a2.addEventListener("input", calculate);

swap.addEventListener('click', function(){
  const temp = c1.value;
  c1.value = c2.value;
  c2.value = temp;
  calculate()
})

calculate();