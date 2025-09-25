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
let questRenderList = [
	"praporQuestList",
	"therapistQuestList",
	"fenceQuestList",
	"skierQuestList",
	"peacekeeperQuestList",
	"mechanicQuestList",
	"ragmanQuestList",
	"jaegerQuestList",
	"lightkeeperQuestList",
	"btrDriverQuestList",
	"refQuestList"
];

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
		const traderQuestList = questRenderList[tradersIndex];
		navbarContent.innerHTML += navBarTempalte(traderName, traderImg, traderQuestList);
	}
}

function renderQuests(questList) {
	let content = document.getElementById("content");
	content.innerHTML = "";
	for (let i = 0; i < questList.length; i++) {
		const questName = questList[i].name;
		const kappareq = questList[i].kappaRequired;
		content.innerHTML += questTemplate(questName, kappareq, i);
	}
}

function completeQuest(index) {
	let completeteQuest = document.getElementById(index);
	completeteQuest.classList.add("quest-complete");
}
