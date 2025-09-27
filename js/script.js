//all arrays are in the lists.js file
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

function renderQuests(questList, name) {
	let content = document.getElementById("content");
	content.innerHTML = "";
	for (let i = 0; i < questList.length; i++) {
		const questName = questList[i].name;
		const kappareq = questList[i].kappaRequired;
		content.innerHTML += questTemplate(questName, kappareq, i, name);
	}
	getItemsFromLocalstorage(name);
}

function completeQuest(index, traderName) {
	let completeteQuest = document.getElementById(index);
	completeteQuest.classList.add("quest-complete");
	const list = traderCompleteQuestLists[traderName];
	if (list) {
		list.push(index);
	} else {
		console.warn("Trader Unbekannt: ", traderName, index);
	}
	setToLocalstorage(traderName, list);
}

function addClass(indexArr) {
	for (let i = 0; i < indexArr.length; i++) {
		const item = document.getElementById(indexArr[i]);
		item.classList.add("quest-complete");
	}
}
