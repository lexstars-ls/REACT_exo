import Profil from "../Profil";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
     <h2>La fabrique a chocolatine</h2>

     <nav>
        <ul>
          <li>
            Nos pains
          </li>
          <li>
            Nos gateaux
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