import Header from "../component/Header"
import { shittyStars } from "../utils/celebrity_utils"
import { useParams } from 'react-router-dom'

function CelebritiePage() {
   const {id } = useParams ()

const idInt = parseInt(id);

const celebrityFound = shittyStars.find((celebrity)=>{
   return celebrity.id === idInt;
})

 return(
     <>
         <Header />
         <div>
             {celebrityFound ? (
                 <article>
                     <h2>biographie</h2>
                     <h3>{celebrityFound.name}</h3>
                     <p>{celebrityFound.bio}</p>
                     <img src={celebrityFound.img} alt={celebrityFound.name} />
                 </article>
             ) : (
                 <p>erreur</p>
             )}
         </div>
         
     </>
 )

}
export default CelebritiePage