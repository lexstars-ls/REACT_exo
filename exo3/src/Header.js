import Profil from "./Profil";


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
           Votre panier
          </li>
          <Profil/>
        </ul>
     </nav>
     </header >
    )
}
export default Header