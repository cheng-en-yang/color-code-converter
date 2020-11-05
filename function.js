const reference;

const rgbToHex = function (input) {
	let firstValue;
	let secondValue;
	let thirdValue;
	const firstCommaIndex = input.indexOf(',');
	const secondCommaIndex = input.indexOf(',', firstCommaIndex + 1);
	const firstBraket = input.indexOf('(');
	const secondBraket = input.indexOf(')');
	firstValue = reference[Math.floor(input.slice(4, 7) / 16)] + reference[(input.slice(4, 7) / 16 - Math.floor(input.slice(4, 7) / 16)) * 16];
	secondValue = reference[Math.floor(input.slice(8, 11) / 16)] + reference[(input.slice(8, 11) / 16 - Math.floor(input.slice(8, 11) / 16)) * 16];
	thirdValue = reference[Math.floor(input.slice(12, 15) / 16)] + reference[(input.slice(12, 15) / 16 - Math.floor(input.slice(12, 15) / 16)) * 16];
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
	if (input.includes('rgb')) {
		console.log(rgbToHex(input));
	} else if (input.includes('#')) {
		console.log(hexToRgb(input));
	} else {
		alert('Please enter rgb or hex!');
	}
}

rgbHexConverter('rgb(255,255,255');

