import Header from "../component/Header"
import SpeakerCard from "../component/SpeakerCard"
function TvSpeakersPage (){
    const speakers = ["Laurent Ruquier ","Michel Drucker ","Thierry Ardisson ","Christophe Beaugrand "];
    
        
    return(
        <>
        <Header currentPage={"speakers"}/>
        <h2>mince des speakers de merde sont la</h2>
        <main> 
        {speakers.map ((NameS) => {
            return (
                <SpeakerCard badSpeaker= {NameS} />
            )
        })}
            
        </main>
      
        </>
    )
}
export default TvSpeakersPage