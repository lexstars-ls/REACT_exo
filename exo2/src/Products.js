function Products() {
    const productsFromDb = [
        "pasteque", "melon", "pasteque" , "orange"
     ]



    return (   
         
        <>     
        {/* // je boucle mon tableau avec le param product  */}
        {productsFromDb.map((product)=>{
         return(
            // je retourne un article avec un titre qui contient a chaque fois une var de mon tableau
            <article>
                <h2>{product}</h2>
            </article>
         )
        })}
        <p>Mes Products</p>  
        <ul>
            <li>
                Premier product
            </li>
            <li>
                Second product
            </li>
            <li>
                Troisième product 
            </li>
        </ul>   
        </>  
    )
} 

export default Products;