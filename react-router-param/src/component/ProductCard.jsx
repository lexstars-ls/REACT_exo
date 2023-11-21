import { Link } from "react-router-dom";
// Je déclare un composant qui va pouvoir etre utiliser pour implémenter plusieurs fois des éléments html



function ProductCard({ productToDisplay }) {
    return (
      <article>
        <h3>{productToDisplay.title}</h3>
        <p>{productToDisplay.price}</p>
        <Link to={`/products/${productToDisplay.id}`}>
          <button>Voir le produit</button>
        </Link>
      </article>
    );
  }
  
  export default ProductCard;