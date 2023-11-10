import Home from './Home';
import { Link } from "react-router-dom";
function Footer() {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
    };
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>

            <h4> {infos.author} </h4>
            <p> {infos.published + '  ' + infos.address} </p>


        </>
    )
}
export default Footer