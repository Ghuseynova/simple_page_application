
export const renderCollections = (data) => {
	//console.log(data);
	 data.forEach(el => {
		//console.log(el);
		const markUp = `
			<div class="collection-card-wrap">
				<div class="card">
					<div class="card__imgs">
						<a href="#${el.id}" class="card__link" target="_self">
							<div class="card__link-col">
								<img src="${el.preview_photos[0].urls.small}" alt="..." class="card__img">
							</div>
							<div class="card__link-col">
								<div class="card__img-wrap">
									<img src="${el.preview_photos[1].urls.thumb}" alt="..." class="card__img">
								</div>
								<div class="card__img-wrap">
									<img src="${el.preview_photos[2].urls.thumb}" alt="..." class="card__img">
								</div>
							</div>
						</a>
					</div>
					<div class="card__caption">
						<h2 class="card__caption-title">${el.title}</h2>
						<span class="card__caption-photo-quantity">${el.total_photos}</span>
						<span class="card__caption-creater">Curated by ${el.user.name}</span>
					</div>
					<div class="card__tags">
						<a href="#" class="card__tag">${el.tags[0].title}</a>
						<a href="#" class="card__tag">${el.tags[1].title}</a>
						<a href="#" class="card__tag">${el.tags[2].title}</a>
					</div>
				</div>
			</div>

		`;

		document.querySelector(".collection").insertAdjacentHTML('beforeend', markUp); 
	});

}