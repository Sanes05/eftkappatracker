const setToLocalstorage = (traderName, arr) => {
	const key = traderName;
	localStorage.setItem(key, JSON.stringify(arr));
};

const getItemsFromLocalstorage = (traderName) => {
	const traderRef = JSON.parse(localStorage.getItem(traderName));
	for (let i = 0; i < traderRef.length; i++) {
		const item = document.getElementById(traderRef[i]);
		item.classList.add("quest-complete");
	}
	console.log(traderRef);
};
