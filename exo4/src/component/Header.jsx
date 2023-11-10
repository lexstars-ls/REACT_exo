import { Link } from "react-router-dom";
import '../style/header.scss'
function Header() {
    return (
        <header>
            <h1>Poney land acheter votre poney sous poudre magic</h1>
            <nav>

                <ul>
                    <li><img src="/img/logo.png" alt="" /></li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/poneys">Nos magnifiques poneys</Link>
                    </li>
                    <li>
                        <Link to="/info">infos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/click">Poney qui click</Link>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header