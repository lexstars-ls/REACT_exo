import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header"
import { shittyStars } from "../utils/celebrity_utils"
function HomePage (){

 const validateCelebrity = shittyStars.filter((celebritySelected)=>{
    return celebritySelected.isPickedByTeam == true;
 })
const dateArticle = shittyStars.sort((date1,date2) => new Date(date1.publishedAt)- new Date(date2.publishedAt));

const lastArticle = dateArticle.slice(-2)

const lastPublishedValidateCelebrity = validateCelebrity.slice(-3);

    return(
        
    <>
    <Header currentPage={"homePage"} />
    <main>
      <p>je suis la Home page</p>
      
     <section>
        <h2> les derniers articles a ce jour</h2>
      {lastArticle.map((celebrity)=>{
        return <CelebrityCard celebrityInfo={celebrity}/>
      })}
     </section>

     <section>
      <h2>les 3 derniers articles validés</h2>
       {lastPublishedValidateCelebrity.map((celebrityArticleValidate)=>{
        return <CelebrityCard celebrityInfo={celebrityArticleValidate}/>
        
      })}
    
     </section>
    </main>
   
      
    </>
    )
}
export default HomePage