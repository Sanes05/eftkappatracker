const navBarTempalte = (name, img, traderQuestList) => {
	return `
<div class="navbar-btn-container">
	<button onclick="renderQuests(${traderQuestList} , '${name}')" id="${name}" class="navbar-btn">
		<img class="navbar-btn-img" src="${img}" alt="${name}" />
		<span class="navbar-btn-text">${name}</span>
	</button>
</div>
    `;
};

const questTemplate = (name, kappareq, index, traderName) => {
	return `
    <div class="quest-container" id="${index}">
		<div class="questheadline-container">
	    	<h3 class="quest-headline">${name}</h3>
		</div>
		<div class="quest-kappa-req-container">
	    	<span class="kappa-req">Notwendig Für Kappa: ${kappareq}</span>
		</div>
		<div class="quest-btn-container">
			<button class="quest-complete-btn" onclick="completeQuest(${index} , '${traderName}')">Fertig</button>
		</div>
		</div>
    `;
};
