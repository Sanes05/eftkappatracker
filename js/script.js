let tradersList = [];

async function init() {
	await getTraderInfos();
	renderNavBar();
}

function renderNavBar() {
	let navbarContent = document.getElementById("navbar");
	navbarContent.innerHTML = "";
	for (let tradersIndex = 0; tradersIndex < tradersList.length; tradersIndex++) {
		const traderName = tradersList[tradersIndex].name;
		const traderImg = tradersList[tradersIndex].image;
		navbarContent.innerHTML += navBarTempalte(traderName, traderImg);
	}
}
