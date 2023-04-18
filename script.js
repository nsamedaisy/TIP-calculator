//an event attribute used to associate functionality with being executed whenever the change event occurs i.e it returns current value
const bill = Number(document.querySelector('#total-bill').value);
const tip = document.querySelector('#tip-input').value;
const tipvalue = bill*(tip/100);
const run = document.querySelector('#equal');

document.querySelector('.tip-form').onchange = function() {
  const output = document.querySelector('.tip-output').innerHTML = `${tip}%`;
}