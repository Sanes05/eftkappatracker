let tradersList = [];
let praporQuestList = [];
let therapistQuestList = [];
let skierQuestList = [];
let mechanicQuestList = [];
let ragmanQuestList = [];
let jaegerQuestList = [];
let peacekeeperQuestList = [];
let fenceQuestList = [];
let lightkeeperQuestList = [];
let btrDriverQuestList = [];
let refQuestList = [];

async function init() {
	await getTraderInfos();
	await getQuestInfos();
	renderNavBar();
	console.log();
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
