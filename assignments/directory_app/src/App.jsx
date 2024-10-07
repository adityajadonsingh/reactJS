import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/layout";
import Home from "./Components/Home";
import Retrive from "./Components/Retrive"
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/retrive",
          element: <Retrive/>
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
