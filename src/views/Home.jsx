import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <article className="hero-container">
      <section className="hero-title">
        <h1>Bienvenido Maestro Pokemon</h1>
        <h3>Encuentra tu pokemon favorito</h3>
        <NavLink to="/pokemonapi" className="home-button">
          <Button variant="outline-primary" size="lg">Pokemons</Button>
        </NavLink>
      </section>
    </article>
  );
}
