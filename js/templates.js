const navBarTempalte = (name, img, func) => {
	return `
<div class="navbar-btn-container">
	<button onclick="renderQuests(${func})" class="navbar-btn">
		<img class="navbar-btn-img" src="${img}" alt="${name}" />
		<span class="navbar-btn-text">${name}</span>
	</button>
</div>
    `;
};

const questTemplate = (name, kappareq) => {
	return `
    <div class="quest-container">
	    <h1 class="quest-headline">${name}</h1>
	    <span class="kappa-req">Notwendig Für Kappa: ${kappareq}</span>
    </div>
    `;
};
