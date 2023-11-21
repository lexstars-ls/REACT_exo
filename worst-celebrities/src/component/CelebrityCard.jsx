import { Link } from "react-router-dom"
function CelebrityCard ({celebrityInfo}){
    return(
        <>
        <article>
            <h3> {celebrityInfo.name} </h3>
            <p> {celebrityInfo.bio} </p>
            <Link to={`/celebritypage/${celebrityInfo.id}`}>
             <img src={celebrityInfo.img} alt="" />
            </Link>
            
        </article>
        </>
    )
}
export default CelebrityCard