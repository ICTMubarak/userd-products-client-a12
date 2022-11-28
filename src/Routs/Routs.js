import AllBuyers from "../DeshBoard/AllBuyers";
import AllSellers from "../DeshBoard/AllSellers";
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
                element: <Home></Home>,
                loader: ()  => fetch('https://used-laptop-server.vercel.app/advertised')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/hp',
                element: <Hp></Hp>,
                loader: ()  => fetch('https://used-laptop-server.vercel.app/hp')
            },
            {
                path: '/dell',
                element: <Dell></Dell>,
                loader: ()  => fetch('https://used-laptop-server.vercel.app/dell')
            },
            {
                path: '/acer',
                element: <Acer></Acer>,
                loader: ()  => fetch('https://used-laptop-server.vercel.app/acer')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/booking/:id',
                element: <Booking></Booking>,
                loader: ({params}) => fetch(`https://used-laptop-server.vercel.app/booking/${params.id}`)
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
            {
                path: '/allsellers',
                element: <AllSellers></AllSellers>,
                loader: ()  => fetch('https://used-laptop-server.vercel.app/advertised')
               
            },
            {
                path: '/allbuyers',
                element: <AllBuyers></AllBuyers>,
                loader: ()  => fetch('https://used-laptop-server.vercel.app/allbuyers')
               
            }
           

        ]
    }
    
])

export default router;