import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

// Importando componentes de react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Componente Cards recibiendo prop pokeUrl
const PokemonCard = ({ pokeUrl }) => {
  // Estado Data
  const [pokeData, setPokeData] = useState({});
  const target = useRef(null);

  //   Función para el useEffect llamando al pokeUrl
  const getPokemon = async () => {
    try {
      const response = await fetch(pokeUrl);

      if (!response.ok) {
        throw {
          msg: "Fallo el consumo de la Api",
          error: 404,
        };
      }
      const data = await response.json();
      setPokeData(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect recibiendo función para obtener pokemon getPokemon
  useEffect(() => {
    getPokemon();
  }, []);

  //   Pintando las cards jsx
  return (
    <Card
      style={{ width: "18rem" }}
      className="cards text-start border border-dark"
    >
      <Link to={`/pokemon/${pokeData.name}`} ref={target} >
        <Card.Img
          variant="top"
          className="p-5"
          src={pokeData.sprites?.other?.dream_world?.front_default}
        />
      </Link>
      <Card.Body className="container" style={{ height: "11rem" }}>
        <Card.Title className="alert bg-secondary bg-gradient text-black">
          {pokeData.id}- {pokeData.name}
        </Card.Title>
        <Card.Text className="text-light">
          Experiencia: {pokeData.base_experience}
        </Card.Text>
        <Button variant="danger">Atrapame!</Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
