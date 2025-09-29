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
		const trader = quest.trader?.name;
		const list = traderQuestList[trader];

		if (list) {
			list.push(quest);
		} else {
			console.warn("Unbekannter Trader", trader);
		}
	});
}
