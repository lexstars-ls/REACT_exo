import Header from "../component/Header";
import { useState } from "react";

function LikePage (){
    // je déclare mon usestate, son param selikesCount me servira a ajouter +1 si l'utilisateur click (button) sans recharger la page 
    // usestate(0) signifie que ma valeur par def est 0 
    const [likesCount, setLikesCount]= useState(0); 

    // j'utilise un param déclaré dans button pour actualiser le nbr de like/ a chaque fois que utilisateur click la variable click Handle s'exécute
    const clickHandle = ()=>{
        setLikesCount(likesCount + 1);
        // la variable setLikescount raj +1 a likeCount
    }

 return (
    <>
    <Header currentPage={"like"}/>
    <main>
        <button onClick={clickHandle}>Like</button>
        <p>Vous avez liké {likesCount} fois </p>
    </main>
    </>
 )
}
export default LikePage
