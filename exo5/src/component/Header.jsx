import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="logo pokemon"
      />
      <h1>Le meilleur pokedex pour devenir le meilleur dresseur.e</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;