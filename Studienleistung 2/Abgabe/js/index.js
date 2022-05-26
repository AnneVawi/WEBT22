(async () => {
	const apiService = new ApiService();
	const layoutService = new LayoutService();

	//register listener functions

	//mehr anzeigen
	const buttonShowMore = document.querySelector('#button-showmore');
	buttonShowMore.addEventListener('click', () => {
		apiService.currentDisplayAmount += 10;
		const mainDiv = document.querySelector('#main');
		mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, apiService.currentDisplayAmount));
	});

	//sortieren
	const sortSelector = document.querySelector('#select-sort');
	sortSelector.addEventListener('change', () => {
		switch (sortSelector.value) {
			case 'TIME':
				apiService.sortByTime();
				break;
			case 'TITLE':
				apiService.sortByTitle();
				break;
			case 'DAY':
				apiService.sortByDay();
				break;
			default:
				throw new Error(`unexpected selection from sortSelector: ${sortSelector.value}`);
		}
		const mainDiv = document.querySelector('#main');
		mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, apiService.currentDisplayAmount));
	});

	//initial loading

	const mainDiv = document.querySelector('#main');
	mainDiv.innerHTML = layoutService.getLoadingSpinner();
	try {
		await Promise.all([apiService.getAllNews(), apiService.getAllTags()]);
	} catch (e) {
		mainDiv.innerHTML = layoutService.getErrorMessage();
		return;
	}
	mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, apiService.currentDisplayAmount));
})();
