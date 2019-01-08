export const renderPhoto = (data) => {

	const modal = document.createElement('div');
	modal.setAttribute('class','modal');
	document.body.appendChild(modal);

	const markUp = `
			<div class="modal__content content">
				<button class="modal__close">&times;</button>
				<div class="content__img-wrap">
					<img src="${data.urls.small}" alt="..." class="content__img">
				</div>
				<div class="content__info info">
					<div class="info__text-block">
						<h2 class="info__title">Info</h2>
						<span class="info__publish-time">Published on ${formatDate(new Date(data.created_at))}</span>
					</div>
					<div class="info__row">
						<div class="info__col">
							<span class="info__text">Views</span>
							<span class="info__num">${data.views}</span>
						</div>
						<div class="info__col">
							<span class="info__text">Downloads</span>
							<span class="info__num">${data.downloads}</span>
						</div>
						<div class="info__col">
							<span class="info__text">Likes</span>
							<span class="info__num">${data.likes}</span>
						</div>
					</div>
					<hr class="info_line">
					<div class="info__row">
						<div class="info__col">
							<span class="info__text info__text--grey">Camera Make</span>
							<span class="info__desc">${data.exif.make === null ? "--" : data.exif.make}</span>
						</div>
						<div class="info__col">
							<span class="info__text info__text--grey">Camera Model</span>
							<span class="info__desc">${data.exif.model === null ? "--" : data.exif.model}</span>
						</div>
						<div class="info__col">
							<span class="info__text info__text--grey">Focal Length</span>
							<span class="info__desc">${data.exif.focal_length === null ? "--" : data.exif.focal_length}</span>
						</div>
						<div class="info__col">
							<span class="info__text info__text--grey">Aperture</span>
							<span class="info__desc">f/${data.exif.aperture === null ? "--" : data.exif.aperture}</span>
						</div>
						<div class="info__col">
							<span class="info__text info__text--grey">Shutter Speed</span>
							<span class="info__desc">${data.exif.exposure_time === null ? "--" : data.exif.exposure_time}s</span>
						</div>
						<div class="info__col">
							<span class="info__text info__text--grey">ISO</span>
							<span class="info__desc">${data.exif.iso === null ? "--" : data.exif.iso}</span>
						</div>
						<div class="info__col">
							<span class="info__text info__text--grey">Dimensions</span>
							<span class="info__desc">${data.width}/${data.height}</span>
						</div>
					</div>
				</div>
			</div>
	`;

	document.querySelector(".modal").insertAdjacentHTML("beforeend", markUp);
}

const formatDate = (date) => {
	const month = [
		"January", "February", "March",
	    "April", "May", "June", "July",
	    "August", "September", "October",
	    "November", "December"
	];

	const d = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

	return d;
}

export const closeModal = (e) => {
	// alert('I am working');
	e.stopPropagation();

	document.querySelector('.modal').classList.add('invisible');

	const modal = document.querySelector('.modal');
	
	if(document.body.contains(modal)) {
		document.body.removeChild(modal);
	}

}