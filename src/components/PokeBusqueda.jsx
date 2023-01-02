// Importando componente Form de react-bootstrap
import Form from "react-bootstrap/Form";


// // Componente Buscador de pokemons que recibe props setSearch del componente padre MiApi.jsx
const PokeBusqueda = ({ setSearch }) => {

  
  return (
    <div className="browser py-5 mb-3" style={{ height: "17rem" }}>
      <div className="container-fluid">
        <Form className="d-flex flex-column align-items-start my-3">
          <Form.Label htmlFor="search" className="text-light h4">
            Encuentra tu Pokemon
          </Form.Label>
          <input
            type="text"
            name="search"
            placeholder="Ingresa el nombre"
            className="p-1"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </div>
    </div>
  );
};


export default PokeBusqueda;
