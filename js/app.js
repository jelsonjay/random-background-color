'use strict';

const btn = document.querySelector('button');
const colorText = document.querySelector('p');

btn.addEventListener('click', () => {
	let color = '#';
	let symbol = '0123456789ABCDEF';

	for (let i = 0; i < 6; i++) {
		color = color + symbol[Math.floor(Math.random() * 16)];
	}
	document.body.style.background = color;
	colorText.innerText = color;
});
