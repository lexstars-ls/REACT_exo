import Header from '../componements/Header'
import Footer from '../componements/Footer';

function Home() {
    const articles = [
        {
            title: "Article 1",
            price: 10,
            isPublished: true,
        },

        {
            title: "Article 2",
            price: 20,
            isPublished: false,
        },

        {
            title: "Article 3",
            price: 30,
            isPublished: true,
        },

        {
            title: "Article 4",
            price: 40,
            isPublished: false,
        },

        {
            title: "Article 5",
            price: 50,
            isPublished: true,
        },

        {
            title: "Article 6",
            price: 60,
            isPublished: false,
        },

        {
            title: "Article 7",
            price: 70,
            isPublished: true,
        },

        {
            title: "Article 8",
            price: 80,
            isPublished: false,
        },

        {
            title: "Article 9",
            price: 90,
            isPublished: true,
        },

        {
            title: "Article 10",
            price: 100,
            isPublished: false,
        },
    ];
   
//variable qui récupère les articles publiés
    const publishedArticle = articles.filter((article)=>{
     return article.isPublished == true;
    })
    //variable qui récupère les 3 derniers articles publiés de la variable publishedElement
    const articleFiltered = publishedArticle.slice(-3)
// a travailler
    return (
        <>
         <Header />
       
        <main>
            {/* on dit a notre fonction de retourner toute les valeurs du tavleau articleFiltered avec un map(param article) */}
          {articleFiltered.map((article) => {
            return (
              <article>
                <h2>{article.title}</h2>
                <p>{article.price} euros</p>
              </article>
            );
          })}
        </main>
        <Footer />
        </>

      );
}           

export default Home;