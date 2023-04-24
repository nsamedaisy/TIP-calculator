window.onload = () => {
    document.querySelector('#result').onclick = calculateTip;
  }

function calculateTip() {
  let bill = document.querySelector('#amount').value;
  let people = document.querySelector('#peopleamt').value;
  let tip = document.querySelector('#tipinput').value;
  
  if (bill === '' && tip === 'Select') {
    alert("Please enter valid values");
    return;
  }

  if (people === '1')
    document.querySelector('#each').style.display = 'none';
  else
    document.querySelector('#each').style.display = 'block';

  let total = (bill * tip) / people;
  total = total.toFixed(2);

  document.querySelector('#total').style.display = 'block';
  document.querySelector('#tip').innerHTML = total;
}

// document.querySelector('#refresh').onclick = function(){
//   document.querySelectorAll('.tipform').innerHTML = "";
// }
