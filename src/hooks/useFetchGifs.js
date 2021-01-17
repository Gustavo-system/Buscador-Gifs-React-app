import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        carga: true
    });

    useEffect(() => {
        getGifs(categoria).then( img => {
            setState({
                data: img,
                carga: false
            });
        });
    }, [categoria])

    return state;
}












// Este es un coostomhook