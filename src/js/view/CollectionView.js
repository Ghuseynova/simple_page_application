export const renderCollection = (data) => {
	const markUp = `
		<div class="text-block-wrapper">
			<div class="text-block">
				<h1 class="text-block__title">${data.title}</h1>
				<p class="text-block__description">${data.description === null ? "" : data.description}</p>
			</div>
		</div>
		<div class="gallery-wrapper">
			<div class="gallery">
			</div>
		</div>
	`;
	document.querySelector(".page").innerHTML = markUp;
}

export const renderCollPhoto = (data) => {
	data.forEach(el => {
		const markUp = `
			<div class="gallery__item item">
				<div class="item__img-wrap" title="View the photo by ${el.user.name}" data-goto="${el.id}">
					<img src="${el.urls.small}" alt="..." class="item__img">
				</div>
			</div>
		`;
		document.querySelector(".gallery").insertAdjacentHTML("beforeend", markUp);
	});
}