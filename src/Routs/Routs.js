import Main from "../Layout/Main";
import Login from "../Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Acer from "../Pages/ProductShow/Acer";
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
                path: '/acer',
                element: <Acer></Acer>,
                loader: ()  => fetch('http://localhost:5000/acer')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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