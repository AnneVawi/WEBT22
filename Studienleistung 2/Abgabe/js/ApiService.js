class ApiService {
	SERVER_BASE_URL = 'https://web-t.l0e.de/tl2';
	currentData = [];
	tags = [];
	currentDisplayAmount = 10;

	async getAllTags() {
		const data = await this.performApiCall(`${this.SERVER_BASE_URL}/news/tags`);
		this.tags = data.content;
	}

	async getAllNews() {
		const data = await this.performApiCall(`${this.SERVER_BASE_URL}/news`);
		this.currentData = data.content;
		this.currentDisplayAmount = 10;
	}

	async getNewsByTag(tag) {
		const data = await this.performApiCall(`${this.SERVER_BASE_URL}/news/tag/${tag}`);
		this.currentData = data.content;
		this.currentDisplayAmount = 10;
	}

	async performApiCall(url) {
		const response = await fetch(url);
		return await response.json();
	}

	// ... hier folgen die Sortierfunktionen...

	sortByTime() {
		this.currentData.sort((a, b) => {
			return new Date(`1970-01-01T${b.time}.000Z`) - new Date(`1970-01-01T${a.time}.000Z`);
		});
	}

	sortByTitle() {
		this.currentData.sort((a, b) => {
			return b.title.localeCompare(a.title);
		});
	}

	sortByDay() {
		this.currentData.sort((a, b) => {
			return new Date(`${b.date}T00:00:00.000Z`) - new Date(`${a.date}T00:00:00.000Z`);
		});
	}
}
