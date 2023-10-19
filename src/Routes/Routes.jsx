import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AddCard from "../Pages/AddCard/AddCard";
import Register from "../Pages/Register/Register";
import Toyota from "../Pages/Toyota";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>

            },
            {
                path: '/myCard',
                element: <AddCard></AddCard>

            },
            {
                path:'/toyota',
                element:<Toyota></Toyota>,
                loader: () => fetch('http://localhost:5000/automotive/Toyota')
                // loader: ({params}) => fetch(`http://localhost:5000/automotive/name${params.name}`)
                

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Routes;