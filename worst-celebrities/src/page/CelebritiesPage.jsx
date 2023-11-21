
import Header from "../component/Header";
import {shittyStars} from "../utils/celebrity_utils"
import CelebrityCard from "../component/CelebrityCard";


function CelebritiesPage() {


    return (
        <>
            <Header />
            

            <main>
            <h2> je suis la pages des célébrités</h2>
                {shittyStars.map((celebrity) => {
                    return <CelebrityCard celebrityInfo={celebrity} />
                })}
            </main>
        </>
    )
}
export default CelebritiesPage