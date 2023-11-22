import { useState } from "react"
// import de use state pour créef une variable (sans impossible de le faire)
import Header from "../component/Header"
function Copyrigth () {

    // variable qui a 2 param display texte qui est le texte (affichage) et setDispt qui définit l'état du texte en rechageant le composant
const [displayText, setDisplayText] = useState(true);  
const handleButtonClick = ()=>{
    // variable qui modifie l'état de display test via setdisplayt apres le click sur le bouton (onclcik param handlebutton)
 setDisplayText(!displayText)
//  a chaque click le composant est rechargé et change en fonction de son état (true = affichage false = pas d'affichage)
};
    return (
        <>
        <Header/>
        <main>
            {/* displayText (valeur qui est affiché ou non) */}
        { displayText &&<h2>uwu tu es cringe</h2>}
        <button onClick={handleButtonClick}>cacher le cringe</button>
        </main>
        </>
    )
}
export default Copyrigth