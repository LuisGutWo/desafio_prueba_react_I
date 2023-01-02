import { useEffect, useState } from "react";

// Importando los Componentes
import PokeBusqueda from "./PokeBusqueda";
import PokemonCard from "./PokemonCard";


const MiApi = () => {

  // Creando los estados
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");


  // Función request que trae la API con useEffect
  const pokeRequest = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
    );
    const data = await response.json();
    setPokemons(data.results);
  };
  useEffect(() => {
    pokeRequest();
  }, []);


  // Pintando el jsx 
  return (
    <>
      <PokeBusqueda setSearch={setSearch} />
      <div className="d-flex flex-wrap gap-3 justify-content-center align-item-center">
        {pokemons
          .filter((pokemon) => pokemon.name.includes(search))
          .map((pokemon) => (
            <PokemonCard key={pokemon.name} pokeUrl={pokemon.url} />
          ))
          .sort((a, b) => a - b)}
      </div>
    </>
  ); 
};

export default MiApi;
