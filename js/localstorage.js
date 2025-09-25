const setToLocalstorage = (traderName, arr) => {
	const key = traderName;
	localStorage.setItem(key, JSON.stringify(arr));
};
