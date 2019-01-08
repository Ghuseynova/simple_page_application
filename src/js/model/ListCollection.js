class ListCollection {
	constructor(key, page) {
		this.key = key;
		this.page = page;
	}

	async getCollections() {
		try {
			const url = `https://api.unsplash.com/collections/?page=${this.page}&client_id=${this.key}`;
			const collections = await fetch(url);
			const response = collections.json();
			console.log(response);
			return response;
		} catch(error) {
			console.log(`Error: ${error}`);
		}
	}
}

export default ListCollection;