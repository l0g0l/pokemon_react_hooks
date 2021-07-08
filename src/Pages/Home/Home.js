
import React, { useState, useEffect } from 'react';
import useDebounce from '../../Hooks/useDebounce';

import axios from 'axios';
import ListPokemon from '../../Components/ListPokemon/ListPokemon';


import './home.css';

export default function App() {
    const [nameInput, setNameInput] = useState('');
    const [pokemon, setPokemon] = useState([]);
    const [find, setFind] = useState(true);
    const [isSearching, setIsSearching] = useState(false);


    // recogemos el valor que introducimos por el input 
    const handleChange = (e) => {
        let value = e.target.value.toLowerCase();
        console.log(value)
        setNameInput(value)

    }
    // Ahora llamamos a nuestro hook, pasando el valor actual de nameInput.El hook sólo devolverá el último valor (el que le pasamos) si han pasado más de 900ms desde que fue llamado por última vez. En caso contrario, devolverá el valor anterior del nameInput. El objetivo es que la llamada a la API sólo se dispare cuando el usuario deje de escribir para que no estemos acribillando a llamadas la API
    const debouncedSearch = useDebounce(nameInput, 900);


    // solo cuando cambiamos el estado almacenado en nameInput el useEffect se ejecuta, por eso ponemos la variable de estado en el array final
    useEffect(() => {
        if (debouncedSearch) { // aparece searching
            setIsSearching(true);
        }

        // hacemos un if para controlar que no haga la llamada a la API si nameInput es vacío
        if (nameInput !== '') {
            //Con el .some() buscamos en pokemon si lo que introducimos por el input coincide con la propiedad name del objeto array pokemon
            let result = pokemon.some(item => { // retorna true o false, true si nameInput es igual a la propiedad name dentro del obejto array pokemon. False si no coincide
                return item.name === nameInput
            })
            console.log(result)

            if (result === false) {
                let url = `https://pokeapi.co/api/v2/pokemon/${nameInput}`
                axios.get(url)
                    .then(response => {
                        console.log(response.data)
                        //hacemos validación creando un state a true, y decimos, si existe data de la API entonces, guarda en setPokemon y mantiene el state de find en true
                        if (response.data) {
                            setPokemon([...pokemon, response.data])
                            console.log(pokemon) // no sale el valor que se acaba de setear en el estado
                            setFind(true)
                            setIsSearching(false);

                        }
                        //setea el input a vacío. A su vez le tengo que pasar un value al input con el nuevo estado
                        setNameInput('')
                    })
                    // aqui metemos el setFind porque si no encuentra pokemon genera un error que nos muestra el catch y es aquí donde cambiamos el state a false para que pinte el mensaje
                    .catch(error => {
                        setFind(false)
                        setIsSearching(false)
                    })
            } else {
                setIsSearching(false)
                setNameInput('')
            }
        }
        //  Nuestra función useEffect sólo se ejecutará si el valor de este array cambia y gracias a nuestro hook sólo cambiará si el valor original (searchTerm) no ha cambiado durante más de 900ms.
    }, [debouncedSearch])

    // ponemos como value el valor del state nameInput para que lo setee a vacío
    // Renderizamos listPokemon y le pasamos por props (data) lo necesario para que pinte las cards
    return (
        <div className="App">
            <input className="input" type="text" name="buscador" onChange={(e) => handleChange(e)} value={nameInput} />
            {isSearching && <div>Searching ...</div>}
            <div className="listPokemons">
                {!find ? <h3 className="errorPokemon">Pokemon no encontrado</h3> : null}
                <ListPokemon data={pokemon} />
            </div>
        </div>
    );
}


