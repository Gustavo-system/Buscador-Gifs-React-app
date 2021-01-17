import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setSeries}) =>{

    const [inputValue, setImputValue] = useState('')

    //sirve para cambiar el estado del compnente por medio del set del useState();
    const inputChange = (e) =>{
        setImputValue(e.target.value);
    }

    /*captura el evento submit, con el preventDefault se evita recargar la pagina
    se obtiene el valor del otro componente por medio de los props requeridos y se hace un callback para
    hacer la modificacion del valor*/
    const isSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setSeries( ser => [ inputValue, ...ser ]);
            setImputValue('');
        }
    }

    return (
        <form onSubmit={isSubmit}>
            <input 
                type="Text"
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    );
}

/**se agregan los props para obligar los datos que de deben proporcionar
 * dentro del componente.
 */
AddCategory.propTypes={
    setSeries: PropTypes.func.isRequired
}
