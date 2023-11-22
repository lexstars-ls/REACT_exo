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
        </ul>
      </nav>
    </header>
  )
}
export default Header