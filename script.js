function createGrid(/* gridNbr */) {
	let i = -1;
	let grid = document.getElementById("grid-container");
	let gridNbr = 256;

	while (++i < gridNbr) {
		let newDiv = document.createElement("div");
		newDiv.className = "grid";
		newDiv.style.background = `#${Math.floor(Math.random() * 16777215).toString(
			16
		)}`;
		newDiv.style.opacity = 0.1;
		newDiv.addEventListener("mouseenter", () => changeOpacity(newDiv, newDiv.style.opacity));
		grid.appendChild(newDiv);
	}
	document.documentElement.style.setProperty(
		"--grid-count",
		Math.sqrt(gridNbr)
	);
}

/* function changeColor(newDiv) {
	const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	newDiv.style.background = randomColor;
} */

function changeOpacity(newDiv, nbr) {
	console.log(nbr + 0.1);
	newDiv.style.opacity = nbr + 0.1;
}

function changeGridSize() {
	let size = prompt("Please enter the desired width of the grid:");
	if (size <= 100) createGrid(size * size);
	else return alert("Grid is too big. Please enter a number lower than 100!");
}

window.onload = function () {
	createGrid();
};
