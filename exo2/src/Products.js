function Products() {
    const productsFromDb = [
        {
            title: "aspirateur",
            price: 20,
            isPublished: true,
        },
        {
            title: "canne a peche",
            price: 150,
            isPublished: true,
        },
        {
            title: "casque de mobilette",
            price: 80,
            isPublished: true,
        }
    ]



    return (

        <>
            {/* // je boucle mon tableau avec le param product  */}
            {productsFromDb.map((product) => {
                return (
                    <>
                    
                        {product.isPublished && (
                            <>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                            </>
                        )
                        }
                    </>
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