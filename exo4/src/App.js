
import './App.css';
import Header from './component/Header'
import Home from './page/Home';
import Poneys from './page/Poneys'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Info from './page/Footer'
import Contact from './page/Contact'
import PoneyTalk from './page/Poneytalk';
function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>

    <Route path ="/" element ={<Home/>} />
    <Route path="/poneys" element={<Poneys />} />
    <Route path="/info" element={<Info />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/click" element={<PoneyTalk />} />
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
