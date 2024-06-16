import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layouts/Layout"
import Home from "../pages/Home"
import Registro from "../pages/Registro";
import Edicao from "../pages/Edicao";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/registro",
                element: <Registro></Registro>
            },
            {
                path: "/edicao",
                element: <Edicao></Edicao>
            }
        ]
    }
])

export default router;