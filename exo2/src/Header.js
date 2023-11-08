const yourName = true;

function Header() {
    return (
        <header>
        <h1>Header</h1>
        <nav>
            <ul>
                <li>Accueil</li>
                <li>Home</li>                
                <li>Contact</li>

                {yourName ? <li>Bonjour Lucas</li> : <li>Veuillez vous connecter</li>}
            </ul>
        </nav>
        </header>
    )
}

export default Header;