import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objeto from "./pages/Objeto";
import Pagina1 from "./pages/Pagina1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesemCartazes from "./pages/filmes/FilmesemCartazes";
import Filmeslancamentos from "./pages/filmes/Filmeslancamentos";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Carros />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="/array" element={<Array />} />
            <Route path="/objeto" element={<Objeto />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/filmes/populares" element={<FilmesPopulares />} />
            <Route path="/filmes/:id" element={<FilmesDetalhes />} />
            <Route path="/filmes/cartazes" element={<FilmesemCartazes />} />
            <Route path="/filmes/lancamentos" element={<Filmeslancamentos />} />
            
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
