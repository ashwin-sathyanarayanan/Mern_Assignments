import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://pokeapi.co/api"
function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
    .get(`${baseURL}/v2/pokemon/`)
    .then((res) => {
      console.log("success")
      setPokemons(res.data.results)
    })
    .catch((err) => {
      console.log(err)
    });
  }, [])

  return (
    <div className="App">
      <h2>POKEMONS</h2>
      {pokemons.map((poke,index) => {
        return <div key = {index}>
          <li>{poke.name}</li>
          </div>
      })}
    </div>
  );
}

export default App;
