// const display = document.querySelector('#total');
// display.addEventListener('click', finalTip);

function tipCalculator() {
  const bill = parseInt(document.querySelector('#amt-input').value);
  const tip = parseInt(document.querySelector('#tip-input').value);
  const people = parseInt(document.querySelector('#peopleamt').value);

  if(people === "" || people <= 1){
    people = 1;
    document.getElementById("each").style.display = "none";
  } 
    else {
      document.getElementById("each").style.display = "block";
   }

  const totalbill = (amt-input * tip-input)/people;
  totalbill = Math.round(totalbill * 100)/100;
  totalbill = totalbill.toFixed(2);

  document.getElementById("total").style.display ="block";
  document.getElementById("tip").innerHTML = totalbill;
}

  document.getElementById("total").style.display ="none";
  document.getElementById("each").style.display ="none";

  document.getElementById("result").onclick = functiom(); {
    tipCalculator();
  }

function finalTip(e) {
  e.preventDefault()
  document.querySelector('#display-result').innerHTML = tipCalculator()
}
