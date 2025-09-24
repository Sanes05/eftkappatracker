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

async function getQuestInofs() {
	try {
		let questsAPI = await fetch(`http://localhost:3000/quests`);
		let questsRef = await questsAPI.json();
		sortQuestFromTraderName(questsRef);
	} catch (error) {
		console.error(error);
	}
}

const sortQuestFromTraderName = (quests) => {
	return quests.sort((a, b) => {
		if (!a.trader || !a.trader.name) return 1; // falls kein Trader vorhanden
		if (!b.trader || !b.trader.name) return -1;
		return a.trader.name.localeCompare(b.trader.name);
	});
};

// Nutzung:
const sorted = sortQuestFromTraderName(quests);
console.log(sorted.map((q) => `${q.trader.name}: ${q.name}`));
