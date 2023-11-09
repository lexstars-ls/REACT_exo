import Profil from "../Profil";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
     <h2>La fabrique a chocolatine</h2>

     <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>


          <li>
            <Link to="/articles">Nos Articles</Link>
          </li>
          
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <Profil/>
        </ul>
     </nav>
     </header >
    )
}
export default Header