import { createBrowserRouter } from "react-router";
import App from "./App.jsx"
import Home from "./assets/pages/home";
import Labyrinthe from "./assets/composants/jeux-html/labirynth-html.js";
import Regle from "./assets/pages/rêgle.js";
import Labyrinthe1 from "./assets/composants/jeux-API/labirynth-API.js";
import Labyrinthe2 from "./assets/composants/jeux-React/labirynth-React.js";
import Cours from "./assets/pages/cours.js";



const Routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Labyrinthe />,
        path: "/Labyrinthe",
      },
      {
        element: <Labyrinthe1 />,
        path: "/Labyrinthe1",
      },
      {
        element: <Labyrinthe2 />,
        path: "/Labyrinthe2",
      },
      {
        element: <Cours />,
        path: "/Cours",
      },
      {
        element: <Regle />,
        path: "/Regle",
      }
    ]
  }
])

export default Routes;
