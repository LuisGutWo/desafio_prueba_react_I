import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import PokemonApi from "./views/PokemonApi";
import Pokemones from "./views/Pokemones";
import PokemonPage from "./views/PokemonPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonapi" element={<PokemonApi />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="*" element={<h1>NotFound 404</h1>} />
      </Routes>
    </>
  );
};

export default App;
