

function Header() {
    const yourName = true;
    const itemInCart = 2;

    return (
        <header>
        <h1>Header</h1>
        <nav>
            <ul>
                {yourName ? <li>Bonjour Lucas</li> : <li>Veuillez vous connecter</li>}
                <li>Accueil</li>
                <li>Home</li>                
                <li>Contact</li>
                {itemInCart >0? <li> votre panier contient :{itemInCart}</li> : <li>Pas d'item aouter</li>}
               
            </ul>
        </nav>
        </header>
    )
}

export default Header;