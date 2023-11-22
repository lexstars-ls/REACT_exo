import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CelebritiesPage from "./page/CelebritiesPage";
import CelebritiePage from "./page/CelebritiePage";
import TvSpeakersPage from "./page/TvSpeakersPage";
import Copyrigth from "./page/Copyrigth";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage/>}  />
        <Route path="/celebritypages" element={<CelebritiesPage />} />
        <Route path="/celebritypage" element ={<CelebritiePage/>}  />
        <Route path="/celebritypage/:id" element ={< CelebritiePage/>}  />
        <Route path="/speakerspage" element ={< TvSpeakersPage/>}  />
        <Route path="/copyrigthpage" element ={< Copyrigth/>}  />

      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
