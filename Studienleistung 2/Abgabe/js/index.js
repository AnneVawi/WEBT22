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
			case 'TAG':
				apiService.sortByTag();
				break;
			default:
				throw new Error(`unexpected selection from sortSelector: ${sortSelector.value}`);
		}
		const mainDiv = document.querySelector('#main');
		mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, apiService.currentDisplayAmount));
	});

	//tags
	const tagSelector = document.querySelector('#select-tag');


	tagSelector.addEventListener('change', async () => {
		const mainDiv = document.querySelector('#main');
		mainDiv.innerHTML = layoutService.getLoadingSpinner();
		try {
			if (tagSelector.value === 'none') {
				await apiService.getAllNews();
				
			} else {
				await apiService.getNewsByTag(tagSelector.value);
			}

			mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, apiService.currentDisplayAmount));
		} catch (e) {
			mainDiv.innerHTML = layoutService.getErrorMessage();
			return;
		}
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

	tagSelector.innerHTML = layoutService.getSelectorItems(apiService.tags);

	mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, apiService.currentDisplayAmount));

})();
