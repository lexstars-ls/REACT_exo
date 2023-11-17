import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './page/HomePage';
import PokemonsList from "./page/PokemonsList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<PokemonsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
