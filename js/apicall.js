async function getTraderInfos() {
	try {
		let tradersAPI = await fetch(`http://localhost:3000/traders`);
		let tradersRef = await tradersAPI.json();
		for (let tradersIndex = 0; tradersIndex < tradersRef.length; tradersIndex++) {
			const trader = tradersRef[tradersIndex];
			tradersList.push({
				name: trader.name,
				image: trader.imageLink
			});
		}
	} catch (error) {
		console.error(error);
	}
}

async function getQuestInfos() {
	try {
		let questsAPI = await fetch(`http://localhost:3000/quests`);
		let questsRef = await questsAPI.json();
		sortQuestsByTrader(questsRef);
	} catch (error) {
		console.error(error);
	}
}

function sortQuestsByTrader(quests) {
	quests.forEach((quest) => {
		const trader = quest.trader?.name || "Unbekant";
		switch (trader) {
			case "Prapor":
				praporQuestList.push(quest);
				break;
			case "Therapist":
				therapistQuestList.push(quest);
				break;
			case "Skier":
				skierQuestList.push(quest);
				break;
			case "Mechanic":
				mechanicQuestList.push(quest);
				break;
			case "Ragman":
				ragmanQuestList.push(quest);
				break;
			case "Jaeger":
				jaegerQuestList.push(quest);
				break;
			case "Peacekeeper":
				peacekeeperQuestList.push(quest);
				break;
			case "Fence":
				fenceQuestList.push(quest);
				break;
			case "Lightkeeper":
				lightkeeperQuestList.push(quest);
				break;
			case "BTR Driver":
				btrDriverQuestList.push(quest);
				break;
			case "Ref":
				refQuestList.push(quest);
				break;
			default:
				console.warn("Trader Unbekant: ", trader, quest);
		}
	});
}
