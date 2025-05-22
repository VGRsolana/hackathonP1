import { createBrowserRouter } from "react-router";
import App from "./App.jsx"
import Home from "./assets/pages/home";
import Labyrinthe from "./assets/composants/labirynth";
import Regle from "./assets/pages/rêgle.js";


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
        element: <Regle />,
        path: "/Regle",
      }
    ]
  }
])

export default Routes;
