function createGrid(gridNbr) {
	let i = -1;
	let grid = document.getElementById("grid-container");

	grid.innerHTML = "";
	while (++i < gridNbr) {
		let newDiv = document.createElement("div");
		newDiv.className = "grid";
		newDiv.style.background = `#${Math.floor(Math.random() * 16777215).toString(
			16
		)}`;
		newDiv.style.opacity = 0;
		newDiv.setAttribute("data-opacity", 0);
		newDiv.addEventListener("mouseenter", () => changeOpacity(newDiv));
		grid.appendChild(newDiv);
	}
	document.documentElement.style.setProperty(
		"--grid-count",
		Math.sqrt(gridNbr)
	);
}

function changeOpacity(newDiv) {
	let newOpacity = parseFloat(newDiv.getAttribute("data-opacity"));
	if (newOpacity < 1.0) {
		newOpacity += 0.1;
		newDiv.style.opacity = newOpacity;
		newDiv.setAttribute("data-opacity", newOpacity);
	}
}

function changeGridSize() {
	let size = prompt("Please enter the desired width (<= 100) of the grid:");
	if (size <= 100) createGrid(size * size);
	else return alert("Grid is too big. Please enter a number lower than 100!");
}

/* window.onload = function () {
	changeGridSize();
}; */
