import Header from "../component/Header"
import { useState } from "react"

function Formulaire (){
    const [message, setMessage ] = useState("")
// variable message (qui est input que utilisateur rempli) => utilisateur texte > setMessage = param
    const handleMessageChange = (event) => {
        // variable handleMessageChange param (event)
        setMessage(event.target.value);
    //    handleMessageChange prend la valeur la valeur de l'input par le param (event)
    }

    return(
        <>
        <Header currentPage={"formulaire"}/>
      
       
            <form>
                <label>
                    Message : 
                    {/* input de type text  */}
                <input onChange={handleMessageChange} type="text" name="message" />
                </label>
                <p>Vous avez envoyé : {message} </p>
            </form>

        </>
    )
}
export default Formulaire