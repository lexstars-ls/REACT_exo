import './App.css';
import Home from './page/Home.js';
import './header.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './page/Contact.js';
import Articles from './page/Articles.js';

function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path ="/" element ={<Home/>} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/articles" element={<Articles />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
