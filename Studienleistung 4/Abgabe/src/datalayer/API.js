export default class API {
	static async getData() {
		const response = await fetch('https://tl4.l0e.de/', { mode: 'cors' });
		return response.json();
	}
}
