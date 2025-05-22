import "./home.css"
import imgHome from "../img/imgHome.jpg"

function Home() {
    return (

        <section className="hero">

            <div className="hero-text">
                <h1>Code Adventure</h1>

                <h4 className="homestyle">Bienvenue sur Code Adventure, le site où le code devient un jeu !</h4>
                <p>
                    Explore des labyrinthes interactifs et résous des énigmes pour progresser, tout en apprenant les bases du HTML, CSS, JavaScript, et React. À chaque étape, des questions te mettent au défi de comprendre et d'appliquer des notions essentielles du développement web. Que tu sois débutant ou en quête de révision ludique, Code Adventure transforme l’apprentissage du code en une aventure captivante.
                </p>
            </div>

            <div className="hero-img">
                <img src={imgHome} alt="" />
            </div>

        </section>

    );
}

export default Home