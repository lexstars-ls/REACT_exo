import Header from '../component/Header'
function PoneyTalk (){
    const monBouton = document.querySelector('.test')
    function onClick(e){
        e.preventDefault();
        console.log('You clicked submit.');
        monBouton.style.backgroundColor = 'blue'
        
    }



    return(
        <>
        <Header/>
     <main>
        <img src="/img/image2.jpg" alt="" />
         <p>????????????????????????????????????</p>
        <form onSubmit={onClick}>
        <button className='test' type="submit">Submit</button>
        </form>
     </main>
     </>
    )
}

export default PoneyTalk