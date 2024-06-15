import { createBrowserRouter } from "react-router-dom"
import Main from "../../main"
import Home from "../pages/Home"
import Registro from "../pages/Registro";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/home",
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