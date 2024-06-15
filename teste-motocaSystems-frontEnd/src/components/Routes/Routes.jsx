import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layouts/Layout"
import Home from "../pages/Home"
import Registro from "../pages/Registro";

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
            }
        ]
    }
])

export default router;