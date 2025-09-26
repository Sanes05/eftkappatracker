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
}

function completeQuest(index, traderName) {
	let completeteQuest = document.getElementById(index);
	completeteQuest.classList.add("quest-complete");
	if (traderName === "Prapor") {
		praporCompleteQuestsList.push(index);
	}
	if (traderName === "Therapist") {
		therapistCompleteQuestsList.push(index);
	}
	if (traderName === "Fence") {
		fenceCompleteQuestsList.push(index);
	}
	if (traderName === "Skier") {
		skierCompleteQuestsList.push(index);
	}
	if (traderName === "Peacekeeper") {
		peacekeeperCompleteQuestsList.push(index);
	}
	if (traderName === "Mechanic") {
		mechanicCompleteQuestsList.push(index);
	}
	if (traderName === "Ragman") {
		ragmanCompleteQuestsList.push(index);
	}
	if (traderName === "Jaeger") {
		jaegerCompleteQuestsList.push(index);
	}
	if (traderName === "Lightkeeper") {
		lightkeeperCompleteQuestsList.push(index);
	}
	if (traderName === "BTR Driver") {
		btrDriverCompleteQuestsList.push(index);
	}
	//setToLocalstorage(traderName);
}
