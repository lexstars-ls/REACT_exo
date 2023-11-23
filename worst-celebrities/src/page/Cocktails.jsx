import Header from "../component/Header";
import { useState } from "react";


function Cocktails (){
    // je déclare mon state pour récuperer mon API
    const [cocktails, setCocktails] = useState(null);

    if (!cocktails) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then((response) => response.json())
            // .then(response => response.json())     .then recueille les données puis les données (response) sont traduites en .son (response.json)
            .then((json) => {
                console.log(json);
                setCocktails(json.drinks);
            });
    }
    return (
        <main>
            {cocktails ? (
                <>
                    <article>Cocktails frais et prêts:</article>
                    {cocktails.map((cocktail) => (
                        <div key={cocktail.idDrink}>                            
                            <h2>{cocktail.strDrink}</h2>
                            <img src= {cocktail.strDrinkThumb} alt="" />
                        </div>
                    ))}
                </>
            ) : null}
        </main>
    );
}

export default Cocktails