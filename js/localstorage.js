const setToLocalstorage = (traderName, arr) => {
	const key = traderName;
	localStorage.setItem(key, JSON.stringify(arr));
};

const getItemsFromLocalstorage = (traderName) => {
	const traderRef = JSON.parse(localStorage.getItem(traderName));
	const list = traderCompleteQuestLists[traderName];
	for (let i = 0; i < traderRef.length; i++) {
		const item = traderRef[i];
		list.push(item);
	}
	if (traderRef !== null) {
		addClass(traderRef);
	}
};
