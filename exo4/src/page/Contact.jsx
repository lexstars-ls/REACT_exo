import Header from '../component/Header'
function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <>
        <Header/>
        <form onSubmit={handleSubmit}>
            <ul>
                <li><label at="name">Nom&nbsp;:</label>
                    <input type="text" id="name" name="user_name" />
                </li>
                <li>
                    <label at="mail">E-mail&nbsp;:</label>
                    <input type="email" id="mail" name="user_email" />
                </li>
                <label at="msg">Message&nbsp;:</label>
                <textarea id="msg" name="user_message"></textarea>
            </ul>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}




export default Contact