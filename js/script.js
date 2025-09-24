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
let funcList = ["renderPraporQuests()"];

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
		const func = funcList[tradersIndex];
		navbarContent.innerHTML += navBarTempalte(traderName, traderImg, func);
	}
}

function renderPraporQuests() {
	let content = document.getElementById("content");
	content.innerHTML = "";
	for (let i = 0; i < praporQuestList.length; i++) {
		const questName = praporQuestList[i].name;
		const kappareq = praporQuestList[i].kappaRequired;
		content.innerHTML += questTemplate(questName, kappareq);
	}
}
