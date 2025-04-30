import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Authentication/Login/Login";
import Registetion from "../Authentication/Resgistation/Registetion";

 export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true, Component:Home
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/registation",
                Component:Registetion
            }
        ]
    },
])