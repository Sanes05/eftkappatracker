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
	} catch (error) {
		console.error(error);
	}
}
