function  itemInCartMenu(){
    const itemInCart = 2;
    return (
        <>
          {itemInCart >0? <li> votre panier contient :{itemInCart}</li> : <li>Pas d'item aouter</li>}
        </>
    )
}
export default itemInCartMenu