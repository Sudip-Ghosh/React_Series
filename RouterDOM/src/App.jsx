//Learn about Navigate in react Router (HOMEWORK)
//using so taht our page will not reload instead of anchor tag
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import FormRegister from "../../../Hooks/hooks_in_React/src/components/FormRegister";
import {Link} from "react-router-dom";
import Contact from "./components/Contact";
import User from "./components/User";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/home",
    element:<><h1>Home page</h1>
    <Link to="/about">Take me to about section</Link></>
  },
  {
    path: "/about",
    element: <div>wlcm to about page</div>,
  },
  {
    path: "/FormRegister",
    element: <FormRegister></FormRegister>,
  },
  {
    path: "/Contact",
    element:<><NavBar/><Contact/></>,
  },
  {
    path: "/Login",
    element:<><NavBar/><Login/></>,
  },
  {
    path: "/user/:username",
    element:<User/>,
  },




]);


function App(){
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App;