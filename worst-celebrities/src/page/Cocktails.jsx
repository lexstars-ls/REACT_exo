import Header from "../component/Header";


function Cocktails (){
       // Je déclare mon fetch déf par le lien
       fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
       // Response est le temps de traitement de la bdd (fetch)
       .then(response => response.json())
       // quand toutes les données sont récupérés elles sont ensuite affichés dans le console log
       .then(data => console.log(data))
   
    
    return (
        <>
        <Header currentPage={"boisson"}/>
        </>
    )
}

export default Cocktails