import { Link } from "react-router-dom";
function Header({currentPage}) {
  return (
    <header>
      <h1>les célébrités de merde</h1>

      <nav>
        <ul>
          <li>
            {currentPage ==="homePage" ? (
              <strong>
                <Link to="/">Home</Link>
              </strong>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>

          <li>
            {currentPage === "celebrities" ? (
              <strong>
                <Link to="/celebritypages">Toutes les célébrités</Link>
              </strong>
            ) : (
              <Link to="/celebritypages">Toutes les célébrités</Link>
            )}
          </li>

          <li>
            {currentPage === "speakers" ? (
              <strong>
                <Link to="/speakerspage">les speakers de merde</Link>
              </strong>
            ) : (
              <Link to="/speakerspage">les speakers de merde</Link>
            )}
          </li>

          <li>
            {currentPage === "copyrigth" ? (
              <strong>
                <Link to="/copyrigthpage">copyrigth</Link>
              </strong>
            ) : (
              <Link to="/copyrigthpage">copyrigth</Link>
            )}   
          </li>

          <li>
            {currentPage === "formulaire" ? (
              <strong>
                <Link to="/formulairepage">formulaire</Link>
              </strong>
            ) : (
              <Link to="/formulairepage">formulaire</Link>
            )}   
          </li>

          <li>
            {currentPage === "like" ? (
              <strong>
                <Link to="/likepage">page de like</Link>
              </strong>
            ) : (
              <Link to="/likepage">page de like</Link>
            )}   
          </li>

          <li>
            {currentPage === "boisson" ? (
              <strong>
                <Link to="/cocktailspage">cocktails</Link>
              </strong>
            ) : (
              <Link to="/cocktailspage">cocktails</Link>
            )}   
          </li>

        </ul>
      </nav>
    </header>
  )
}
export default Header