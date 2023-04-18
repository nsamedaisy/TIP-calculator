const display = document.querySelector('#result');
display.addEventListener('click', finalTip);

function tipCalculator() {
	const bill = parseInt(document.querySelector('#amtinput').value);const tip = parseInt(document.querySelector('#tipinput').value);
	return bill*(tip/100);
}

function finalTip() {
	document.querySelector('#display-result').innerHTML = tipCalculator()
}
