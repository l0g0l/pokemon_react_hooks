
import React, { useState, useEffect } from 'react'

import axios from 'axios'
import ListPokemon from './Components/ListPokemon/ListPokemon';


import './App.css';

export default function App() {
  const [nameInput, setNameInput] = useState('');
  const [pokemon, setPokemon] = useState([]);


  // recogemos el valor que introducimos por el input 
  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    console.log(value)
    setNameInput(value)

  }


  // solo cuando cambiamos el estado almacenado en nameInput el useEffect se ejecuta, por eso ponemos la variable de estado en el array final

  useEffect(() => {
    // hacemos un if para controlar que no haga la llamada a la API si nameInput es vacío
    if (nameInput !== '') {
      let url = `https://pokeapi.co/api/v2/pokemon/${nameInput}`
      axios.get(url)
        .then(response => {
          console.log(response.data)

          setPokemon([...pokemon, response.data])
          console.log(pokemon) // no sale el valor que se acaba de setear en el estado poqrque los console logs NO muestran el resultado NADA MÁS CAMBIAR EL STATE

          //setea el input a vacío
          setNameInput('')
        })
        .catch(error => {
          console.log(error);
        })

    }

  }, [nameInput])

  // ponemos como value el valor del state nameInput para que lo setee a vacío
  // Renderizamos listPokemon y le pasamos por props (data) lo necesario para que pinte las cards
  return (
    <div className="App">
      <input className="input" type="text" name="buscador" onChange={(e) => handleChange(e)} value={nameInput} />
      {/* <button onClick={getPokemon}>Buscar</button> */}
      <div>
        <ListPokemon data={pokemon} />
      </div>
    </div>
  );
}


