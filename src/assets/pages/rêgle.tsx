import "./home.css"
import imgRegle from "../img/imgRegle.jpg"

function Regle() {
    return (
       <>
       <section className="hero">
       <div className="hero-text">
        <h1>Regles</h1>
        <h4 className="titreRegle">Bienvenue dans Code Adventure, le jeu de labyrinthe pour apprendre à coder tout en t’amusant !</h4>
        <p>Règles du jeu :

Objectif
Atteins la case rouge en haut à droite du labyrinthe (la sortie), en partant de la case verte (en bas à gauche).

🎲 Fonctionnement du jeu
Lance les dés pour obtenir un nombre de déplacements.

Utilise ce nombre pour déplacer ton personnage (en bleu) sur les cases blanches (les chemins).

Tu ne peux pas traverser les cases noires (les murs).

Les cases jaunes sont des bonus spéciaux qui peuvent être activés plus tard (selon le niveau ou version du jeu).

Lorsque tous tes mouvements sont utilisés, un pop-up s’affiche avec une question de codage (HTML, CSS, JavaScript ou React).

Réponds correctement pour continuer à jouer.

Une mauvaise réponse compte comme une erreur .

Tu gagnes la partie en atteignant la case rouge sans dépasser un certain nombre d’erreurs (selon les paramètres définis).

But pédagogique
Chaque étape du jeu te confronte à des questions de programmation pour t'aider à renforcer tes connaissances tout en progressant dans le labyrinthe.</p>
</div>
  <div className="hero-img">
                <img src={imgRegle} alt="" />
            </div>
</section>
        </>
    )
}

export default Regle