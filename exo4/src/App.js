
import './App.css';
import Header from './componements/Header'
import Home from './page/Home';
import Poneys from './page/Poneys'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Info from './page/Footer'

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>

    <Route path ="/" element ={<Home/>} />
    <Route path="/poneys" element={<Poneys />} />
    <Route path="/info" element={<Info />} />

    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
