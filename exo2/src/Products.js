function Products() {
    const productsFromDb = [
        {
            title: "aspirateur" ,
            price:20 ,
            IsPublished:true,
        },
        {
            title: "canne a peche" ,
            price:150 ,
            IsPublished: true,
        },
        {
            title:"casque de mobilette",
            price:80 ,
            IsPublished: true,
        }
     ]



    return (   
         
        <>     
        {/* // je boucle mon tableau avec le param product  */}
        {productsFromDb.map((product)=>{
         return(
            // je retourne un article avec un titre qui contient a chaque fois une var de mon tableau
            <article>
                <h2>{product.title}  </h2>
                <li>{product.price} euros</li>
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