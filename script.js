data = [
	{
		name: 'Sine Wave Animation',
		link: './sine-wave/sine-wave.html',
		code: 'https://editor.p5js.org/Puneet56/sketches/gEoDrL0b2',
	},
	{
		name: 'Rotating Circle Animation',
		link: './rotating-circle/rotating-circle.html',
		code: 'https://editor.p5js.org/Puneet56/sketches/xYvyCU9sE',
	},
];

let list = document.querySelector('.projects-list');

// let template = `<div class="project">
// 	<a class="name" href="Expanding cards/expanding-cards.html" target="_blank">
// 		1. Expanding cards
// 	</a>
// 	<div class="links">
// 		<a href="Expanding cards/expanding-cards.html" target="_blank">
// 			<button class="open">Open</button>
// 		</a>
// 		<a href="Expanding cards/expanding-cards.html" target="_blank">
// 			<button class="code">View Code</button>
// 		</a>
// 	</div>
// </div>`;

for (i = 0; i < data.length; i++) {
	let divi = document.createElement('div');
	divi.className = 'project';
	divi.innerHTML = `<a class="name" href="${data[i].link}">
		${i + 1 + '. ' + data[i].name}
	</a>
	<div class="links">
		<a href="${data[i].link}">
			<button class="open">Open</button>
		</a>
		<a href="${data[i].code}" target="_blank">
			<button class="code">View Code</button>
		</a>
	</div>
`;
	list.appendChild(divi);
}
