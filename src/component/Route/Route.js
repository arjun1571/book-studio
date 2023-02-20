import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import BookDetail from "../BookDetail/BookDetail";
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
          element: <Books></Books>,
          loader: ()=>{
            return fetch("https://api.itbook.store/1.0/search/mongodb")
          }
        },
        {
            path:"/books/:id",
            element: <BookDetail></BookDetail>,
            loader: ({params})=>{
              return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            }
          },
        {
          path:"/about",
          element: <About></About>
        }
      ]
    },
  ]);