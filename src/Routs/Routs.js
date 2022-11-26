import Main from "../Layout/Main";
import Login from "../Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Home from "../Pages/Home/Home";
import Dell from "../Pages/ProductShow/Dell";
import Hp from "../Pages/ProductShow/Hp";
import Register from "../Register/Register";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/hp',
                element: <Hp></Hp>,
                loader: ()  => fetch('http://localhost:5000/hp')
            },
            {
                path: '/dell',
                element: <Dell></Dell>,
                loader: ()  => fetch('http://localhost:5000/dell')
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

export default router;