import ItemCartInMenu from './ItemCartMenu'

function Header() {
    const yourName = true;
    

   const userLog = {
    lastname : "kiwi",
    firstname: " francis",
    job : "vendeur de fruit",
   }

    return (
        <header>
        <h1>Header</h1>
        <nav>
            <ul>
                {userLog ? <li> votre nom {userLog.lastname}, votre prénom {userLog.firstname} </li> : <li>Veuillez vous connecter</li>}
                {yourName ? <li>Bonjour Lucas</li> : <li>Veuillez vous connecter</li>}
                <li>Accueil</li>
                <li>Home</li>                
                <li>Contact</li>
               <ItemCartInMenu/>
               
            </ul>
        </nav>
        </header>
    )
}

export default Header;