import { Link } from "react-router-dom";
import '../style/header.scss'
function Header() {
    return (
        <header>
            <h1>Pikachu est trop moche en évo</h1>
            <nav>

                <ul>
                    <img src="https://logowik.com/content/uploads/images/pokemon4400.logowik.com.webp" alt="" />
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