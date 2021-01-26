import React from 'react';

export const GifImages = ({ title, url }) => {
	//console.log({title, url});

	return (
		<div className="card animate__bounceIn">
			<img src={url} alt={title} className="img-item" />
			<p> {title} </p>
		</div>
	);
};

// renderisa la imagen y el titulo depsues de que fue hecha la peticion al api
