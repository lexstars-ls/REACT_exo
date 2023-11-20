import { Link } from "react-router-dom";
// 
// définition d'un param pour la function header
function Header({pageTitle , currentPage}) {

  return (
    <header>
      <img
        src="https://www.zarla.com/images/zarla-lectrodomus-1x1-2400x2400-20220705-x44pr4y4bq86kgcbw36t.png?crop=1:1,smart&width=250&dpr=2"
        alt="electro menager"
      />
      {/* utilisation de mon param pour définir un h1 */}
      <h1> {pageTitle} </h1>
      
      <nav>
        <ul>
          <li>
            
            <Link to="/"> <strong>Home</strong></Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
