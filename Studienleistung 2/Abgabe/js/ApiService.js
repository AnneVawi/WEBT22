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
			//hier wurde bewusst aufsteigend gewählt, da es uns sinnvoller erschien
			return a.title.localeCompare(b.title);
		});
	}

	sortByTag() {
		// Hier wurde der Tag (tag) statt dem Tag (day) verwendet, da es uns sinnvoller erschien
		this.currentData.sort((a, b) => {
			//hier wurde bewusst aufsteigend gewählt, da es uns sinnvoller erschien
			return a.tag.localeCompare(b.tag);
		});
	}
}
