class Collection {
	constructor(id, page, key) {
		this.id = id;
		this.page = page;
		this.key = key;
	}

	async getCollection() {
		try {
			const url = `https://api.unsplash.com/collections/${this.id}/?client_id=${this.key}`;
			const photos = await fetch(url);
			const response = photos.json();
			console.log(response);
			return response;
		} catch(error) {
			console.log(`Error: ${error}`);
		}
	}

	async getCollPhotos() {
		try {
			const url = `https://api.unsplash.com/collections/${this.id}/photos/?page=${this.page}&client_id=${this.key}`;
			const photos = await fetch(url);
			const response = photos.json();
			console.log(response);
			return response;
		} catch(error) {
			console.log(`Error: ${error}`);
		}
	} 
}

export default Collection;