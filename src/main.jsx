import { RouterProvider } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from "./Router"


createRoot(document.getElementById("root") || document.body).render(
  <RouterProvider router={Routes} />,
);
