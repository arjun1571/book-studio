import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import About from "../Header/About/About";
import Books from "../Header/Books/Books";
import ErrorPage from "../Header/ErrorPage/ErrorPage";
import Home from "../Header/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          index: true,
          element: <Home></Home>,
          
        },
        {
          path:"/books",
          element: <Books></Books>
        },
        {
          path:"/about",
          element: <About></About>
        }
      ]
    },
  ]);