class ApiService {
	SERVER_BASE_URL = 'https://web-t.l0e.de/tl2';
	currentData = [];
	tags = [];

	async getAllTags() {
		const data = await this.performApiCall(`${this.SERVER_BASE_URL}/news/tags`);
		this.tags = data.content;
		return data.content;
	}

	async getAllNews() {
		const data = await this.performApiCall(`${this.SERVER_BASE_URL}/news`);
		this.currentData = data.content;
		return data.content;
	}

	async getNewsByTag(tag) {
		const data = await this.performApiCall(`${this.SERVER_BASE_URL}/news/tag/${tag}`);
		this.currentData = data.content;
		return data.content;
	}

	async performApiCall(url) {
		const response = await fetch(url);
		return await response.json();
	}

	// ... hier folgen die Sortierfunktionen...
}
