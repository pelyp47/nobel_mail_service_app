import * as react from "react"
import LoginForm from "/@/LoginForm/LoginForm";
import Home from "/@/Home/Home";
import ContactList from "/@/Home/ContactList/ContactList";
import { createBrowserRouter, redirect, createHashRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        "path": "/",
        "exact" : true,
        "loader": ()=>{
            return redirect("/logInForm")
        }
    },
    {
        "path": "logInForm",
        //action
        "element": (<LoginForm/>)
    },
    {
        "path": "home",
        "element": (<Home/>),
        "children": [
            {
                "path": "",
                "index": true,
                "element": <div></div>
            },
            {
                "path": "contactList",
                "element": <ContactList/>
            }
        ]
    }
], {"basename": '/'})


export default router