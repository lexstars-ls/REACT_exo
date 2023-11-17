import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Pikachu est trop moche en évo</h1>
            <nav>

                <ul>
                   
                    <li>
                        <Link to="/">Home</Link>
                    </li>


                    <li>
                        <Link to="/pokemons">Tous les pokémons</Link>
                    </li>
              


                </ul>
            </nav>
        </header>
    )
}

export default Header