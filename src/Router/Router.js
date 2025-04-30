import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Authentication/Login/Login";
import Registetion from "../Authentication/Resgistation/Registetion";
import Tools from "../Components/Tools/Tools";
import Docs from "../Components/Docs/Docs";
import GitHub from "../Components/GitHub/GitHub";
import Footer from "../Components/Footer/Footer";

 export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:"/", Component:Home
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/registetion",
                Component:Registetion
            },

            {
                path:"tools",
                Component:Tools
            },
            {
                path:"docs",
                Component:Docs
            },

            {
                path:"github",
                Component:GitHub
            },
            {
                path:"footer",
                Component:Footer
            }


        ]
    },
])