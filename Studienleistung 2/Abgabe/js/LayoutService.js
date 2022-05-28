class LayoutService {
    getLoadingSpinner() {
        return `
           <p class="loading">Loading...</p>
        `;
    }

    getErrorMessage() {
        return `
            <p class="errorLabel">Error: Something went wrong</p>
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
