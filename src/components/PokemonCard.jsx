import { useEffect, useState } from "react";

// Importando componentes de react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Componente Cards recibiendo prop pokeUrl
const PokemonCard = ({ pokeUrl }) => {
  const [pokeData, setPokeData] = useState({});

//   Función para el useEffect
  const getPokemon = async () => {
    const response = await fetch(pokeUrl);
    const data = await response.json();
    setPokeData(data);
  };
//   useEffect recibiendo función para obtener pokemon getPokemon
  useEffect(() => {
    getPokemon();
  }, []);

//   Pintando las cards jsx
  return (
    <Card style={{ width: "18rem" }} className="cards text-start border border-dark">
      <Card.Img variant="top" className="img-fluid p-5" src={pokeData.sprites?.other?.dream_world?.front_default} />
      <Card.Body>
        <Card.Title className="alert bg-secondary bg-gradient text-white" >
          {pokeData.id}- {pokeData.name}
        </Card.Title>
        <Card.Text>Experiencia: {pokeData.base_experience} </Card.Text>
        <Button variant="danger">Atrapame!</Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
