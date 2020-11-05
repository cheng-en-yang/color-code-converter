const reference = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const rgbToHex = function (input) {
	let firstValue;
	let secondValue;
	let thirdValue;
	const firstCommaIndex = input.indexOf(',');
	const secondCommaIndex = input.indexOf(',', firstCommaIndex + 1);
	const firstBraket = input.indexOf('(');
	const secondBraket = input.indexOf(')');
	firstValue = reference[Math.floor(input.slice(firstBraket + 1, firstCommaIndex) / 16)] + reference[(input.slice(firstBraket + 1, firstCommaIndex) / 16 - Math.floor(input.slice(firstBraket + 1, firstCommaIndex) / 16)) * 16];
	secondValue = reference[Math.floor(input.slice(firstCommaIndex + 1, secondCommaIndex) / 16)] + reference[(input.slice(firstCommaIndex + 1, secondCommaIndex) / 16 - Math.floor(input.slice(firstCommaIndex + 1, secondCommaIndex) / 16)) * 16];
	thirdValue = reference[Math.floor(input.slice(secondCommaIndex + 1, secondBraket) / 16)] + reference[(input.slice(secondCommaIndex + 1, secondBraket) / 16 - Math.floor(input.slice(secondCommaIndex + 1, secondBraket) / 16)) * 16];
	return `#${firstValue}${secondValue}${thirdValue}`
}

const hexToRgb = function (input) {
	let firstValue;
	let secondValue;
	let thirdValue;
	firstValue = reference.indexOf(input[1]) * 16 + reference.indexOf(input[2]);
	secondValue = reference.indexOf(input[3]) * 16 + reference.indexOf(input[4]);
	thirdValue = reference.indexOf(input[5]) * 16 + reference.indexOf(input[6]);
	return `rgb(${firstValue},${secondValue},${thirdValue})`
}

const rgbHexConverter = function (input) {
	let output = document.getElementById('output');
	if (input.includes('rgb')) {
		output.innerHTML = rgbToHex(input);
	} else if (input.includes('#')) {
		output.innerHTML = hexToRgb(input);
	} else {
		alert('Please enter rgb or hex!');
	}
}