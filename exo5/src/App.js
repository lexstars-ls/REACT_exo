import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import PokemonsPage from "./page/PokemonsPage";
import PokemonDetailsPage from "./page/PokemonDetailsPage";
import TrainerDetailsPage from "./page/TrainerDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemons/:id/details" element={<PokemonDetailsPage />} />
        <Route path="/trainers/:id/details" element={<TrainerDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
