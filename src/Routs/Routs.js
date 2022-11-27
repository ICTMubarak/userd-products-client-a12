import Main from "../Layout/Main";
import Login from "../Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Blog from "../Pages/Blog/Blog";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
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
                path: '/booking/:id',
                element: <Booking></Booking>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
              },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ]
    }
])

export default router;