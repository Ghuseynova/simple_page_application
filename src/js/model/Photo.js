class Photo {
	constructor(id, key) {
		this.id = id;
		this.key = key;
	}

	async getPhoto() {
		const url = `https://api.unsplash.com/photos/${this.id}/?client_id=${this.key}`;
		const photo = await fetch(url);
		const response = photo.json();
		console.log(response);
		return response;
	}
}

export default Photo;