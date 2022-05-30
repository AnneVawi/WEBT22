class LayoutService {
	getLoadingSpinner() {
		return `
            <div class="spinner-container"><div class="spinner"></div></div>
        `;
	}

	getErrorMessage() {
		return `
            <p class="errorLabel">Etwas ist schiefgelaufen.</p>
            <p class="errorLabel">Bitte versuchen sie es später noch einmal.</p>
        `;
	}

	getNewsListItem(newsItem) {
		return `
            <article>
                <p class="kicker">${newsItem.tag}</p>
                <h2>${newsItem.title}</h2>
                <p>${newsItem.text}</p>
                <p><a href="${newsItem.url}">Artikel lesen...</a></p>
            </article>
        `;
	}

	getNewsList(newsItmems) {
		if (newsItmems.length === 0) {
			return `<p>Keine News gefunden</p>`;
		}
		return newsItmems.map(this.getNewsListItem).join('\n');
	}
}
