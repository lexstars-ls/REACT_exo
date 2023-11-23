import Header from "../component/Header";
import { useState } from "react";

function LikePage() {
    // je déclare mon usestate, son param selikesCount me servira a ajouter +1 si l'utilisateur click (button) sans recharger la page 
    // usestate(0) signifie que ma valeur par def est 0 
    const [likesCount, setLikesCount] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [tryLike, setTryLike] = useState(0);
    
    const [countInTimeout, setCountInTimeout] = useState(0);

    // j'utilise un param déclaré dans button pour actualiser le nbr de like/ a chaque fois que utilisateur click la variable click Handle s'exécute
    const clickHandle = () => {
        if (likesCount < 5) {
            setLikesCount(likesCount + 1);
            // la variable setLikescount raj +1 a likeCount


        } else {
           
            setDisplayMessage(true)
            setTryLike(tryLike + 1)
        }
        

    }

    const closeMessage = () => {
        setDisplayMessage(false);
        setLikesCount(0)
    }
    



    return (
        <>
            <Header currentPage={"like"} />
            {displayMessage && 
            <div>
                <p>Vous ne pouvez pas liker plus de 5 fois</p>
                <button onClick={closeMessage}>Fermer le message</button>
            </div>}
            <main>
                <button onClick={clickHandle}>Like</button>
                <p> nrb de try {tryLike} Vous avez liké {likesCount} fois </p>
            </main>
        </>
    )
}
export default LikePage
