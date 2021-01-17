import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifImages} from '../Components/GifImages'

export const BodyGif = ({categoria}) => {

    const {data:imagenes, carga} = useFetchGifs(categoria);
    
    return (
        <>
            <h3>{ categoria }</h3>

            {carga && <p className="animate__flash">Cargando ...</p>}
            <div className="container">

                {
                    imagenes.map( img => (
                        <GifImages 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
