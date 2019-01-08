import "@babel/polyfill";
import Style from "../styles/main.scss";
import ListCollection from "./model/ListCollection.js";
import Collection from "./model/Collection.js";
import Photo from "./model/Photo.js";
import * as ListCollView from "./view/ListCollectionView";
import * as CollView from "./view/CollectionView";
import * as PhotoView from "./view/PhotoView"
//key 
const key = "4c45f9022e133247a59b786ee56c17da51cc59b6e9a15ca9f5d42ea6cec75164";

const stand = {};

//List Collection Controller
const ListCollectionController = async () => {
	//create listCollection obj
	stand.listCollection = new ListCollection(key, 1);
	//get data and render element in screen
	try {
		await stand.listCollection.getCollections()
		.then(data => {
			console.log(data);
			ListCollView.renderCollections(data);
		});
	} catch (error) {
		console.log(`Error: ${error}`)
	}
}

//Collection Controller
const CollectionController = async () => {
	const id = window.location.hash.replace('#', '');
	console.log(id);

	//create collection obj
	stand.collection = new Collection(id, 2, key);

	//

	if(id) {
		//get data and render element in screen
		try {
			//prepare UI for results
			document.querySelector(".page").innerHTML = "";
			//get info about collect
			await stand.collection.getCollection()
			.then(data => {
				console.log(data);
				CollView.renderCollection(data);
			});

			//get collection photos
			await stand.collection.getCollPhotos()
			.then(data => {
				console.log(data);
				CollView.renderCollPhoto(data);
			});

		} catch(error) {
			console.log(`Error: ${error}`);
		}
	}

};

//Photo COntroller

const PhotoController = async (e) => {
	console.log(e.target);
	const id = e.target.parentNode.dataset.goto;
	console.log(id);

	//create photo object and render photo
	stand.photo = new Photo(id, key);
	if(id) {
		try {
			await stand.photo.getPhoto()
			.then(data => {
				console.log(data);
				PhotoView.renderPhoto(data);
			});
		} catch(error) {
			console.log(`Error: ${error}`);
		}
	}

	//UI Process
	document.querySelector('.modal').addEventListener('click', PhotoView.closeModal);
	document.querySelector('.modal__close').addEventListener('click', PhotoView.closeModal);
	//Removing class Modal 
}

ListCollectionController();
window.addEventListener('hashchange', () => {
	CollectionController();
	document.querySelector('.page').addEventListener('click', PhotoController);
});
const modal = document.querySelector('.modal');
	if(document.body.contains(modal)) {
	document.body.removeChild(modal);
}
