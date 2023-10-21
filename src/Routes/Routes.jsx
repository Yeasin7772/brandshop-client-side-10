import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AddCard from "../Pages/AddCard/AddCard";
import Register from "../Pages/Register/Register";
import Toyota from "../Pages/Toyota";
import UpdateData from "../Pages/UpdateData/UpdateData";
import ToyataDetails from "../Pages/ToyataDetails/ToyataDetails";
import PrivateRoutes from "./PrivateRoutes";


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
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>

            },
            {
                path: '/myCard',
                element: <PrivateRoutes><AddCard></AddCard></PrivateRoutes>,
                // loader: ({ params }) => fetch(`http://localhost:5000/automotive/${params.id}`)


            },
            {
                path:'/toyota/:name',
                element:<Toyota></Toyota>,
                loader: () => fetch('http://localhost:5000/automotive')
                // loader: ({params}) => fetch(`http://localhost:5000/automotive/name${params.name}`)
                

            }, 
            {
                path:'/update/:id',
                element:<PrivateRoutes><UpdateData></UpdateData></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/automotive/${params.id}`)

            },
            {
                path:'/details/:id',
                element:<PrivateRoutes><ToyataDetails></ToyataDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/automotive/${params.id}`)

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