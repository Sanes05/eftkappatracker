const navBarTempalte = (name, img) => {
	return `
<div class="navbar-btn-container">
	<button class="navbar-btn">
		<img class="navbar-btn-img" src="${img}" alt="${name}" />
		<span class="navbar-btn-text">${name}</span>
	</button>
</div>
    `;
};
