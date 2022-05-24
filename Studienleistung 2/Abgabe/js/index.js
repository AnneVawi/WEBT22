(async () => {
	const apiService = new ApiService();
	const layoutService = new LayoutService();

	const mainDiv = document.querySelector('#main');
	mainDiv.innerHTML = layoutService.getLoadingSpinner();
	try {
		await Promise.all([apiService.getAllNews(), apiService.getAllTags()]);
	} catch (e) {
		mainDiv.innerHTML = layoutService.getErrorMessage();
		return;
	}

	mainDiv.innerHTML = layoutService.getNewsList(apiService.currentData.slice(0, 10));
})();
