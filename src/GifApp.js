import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { BodyGif } from './Components/BodyGif';

export const GifApp = () => {
	//se podria pasar un parametro dentro del useState, que seria el primero que aparecera al cargar la pagina
	const [series, setSeries] = useState([]);

	// const agregar = () =>{
	//     let nombreSerie = 'hombres de negro';
	//     setSeries([...series, nombreSerie]);
	// }

	return (
		<>
			<h2>Search Gifs:</h2>
			<AddCategory setSeries={setSeries} />
			<hr />
			<ol>
				{series.map((el) => (
					<BodyGif key={el} categoria={el} />
				))}
			</ol>
		</>
	);
};
