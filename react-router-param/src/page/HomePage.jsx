import { Link } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/products-utils";
import Sidebar from '../component/Sidebar'
function Home() {
 

  // je trie product par cat
  // je filtre par id

  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

  const productSortedByPrice = products.sort((product1, product2) => product1.price - product2.price);
  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
    {/* je donne une valeur a mon param */}
      <Header pageTitle={"mon header title"} />
      <Sidebar currentPage={"HomePage"}/>
      <main>
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((product) => {
            return (
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return (
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
