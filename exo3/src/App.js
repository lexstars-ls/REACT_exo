import './App.css';
import Header from './Header'
import Footer from './Footer';
import Home from './Home';
import './header.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact.js';


function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path ="/" element ={<Home/>} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
