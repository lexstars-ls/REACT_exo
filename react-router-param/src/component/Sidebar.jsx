
import { Link } from 'react-router-dom'

function Sidebar ({currentPage , PartName}){
    return(
        <>
        <div className='sidebar'>   
        {/* si je suis sur la page home afficher=> */}
        {currentPage =="HomePage" && (
            <ul>
                <li>
                    <Link to='/'>ACCUEIL</Link>
                </li>
                <li>
                    <Link to='/product'>NOS PRODUITS</Link>
                </li>
            </ul>
        )}
        {/* si je suis sur la page product */}
        {currentPage =="ProductPage" && 
            <p>vous consulez la liste des produits</p>}
            {/* quand on clik sur un produit */}
        {currentPage =="productDetailPage" &&
            <p>{`vous consultez le produit ${PartName}`}</p>}


            </div>
        </>
    )
}

export default Sidebar