import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/Home";
import ContactUs from "../components/Pages/ContactUs/ContactUs";
import Details from "../components/Pages/Details/Details";
import Kid from "../components/Pages/Details/Kid";
import AbedaKhatun from "../components/Pages/GGrandChild/AbedaKhatun/AbedaKhatun";
import SaalehAhmed from "../components/Pages/GGrandChild/SaalehAhmed/SaalehAhmed";
import NojirAhmed from "../components/Pages/GGrandChild/NojirAhmed/NojirAhmed";
import JalalAhmed from "../components/Pages/GGrandChild/JalalAhmed/JalalAhmed";
import JulekhaKhatun from "../components/Pages/GGrandChild/JulekhaKhatun/JulekhaKhatun";
import AnjumunNahar from "../components/Pages/GGrandChild/AnjumunNahar/AnjumunNahar";
import MubarakAli from "../components/Pages/GGrandChild/MubarakAli/MubarakAli";
import GGrandChild from "../components/Pages/GGrandChild/GGrandChild";
import Login from "../components/Shared/Login/Login";
import Register from "../components/Shared/Register/Register";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/details",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: "/kid",
        element: <PrivateRoute><Kid></Kid></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><GGrandChild></GGrandChild></PrivateRoute>,
    children:
      [
        {
          path: "abeda",
          element: <PrivateRoute><AbedaKhatun></AbedaKhatun></PrivateRoute>,
        },
        {
          path: "saaleh",
          element: <PrivateRoute><SaalehAhmed></SaalehAhmed></PrivateRoute>,
        },
        {
          path: "nojir",
          element: <PrivateRoute><NojirAhmed></NojirAhmed></PrivateRoute>,
        },
        {
          path: "jalal",
          element: <PrivateRoute><JalalAhmed></JalalAhmed></PrivateRoute>,
        },
        {
          path: "julakha",
          element: <PrivateRoute><JulekhaKhatun></JulekhaKhatun></PrivateRoute>,
        },
        {
          path: "anjumum",
          element: <PrivateRoute><AnjumunNahar></AnjumunNahar></PrivateRoute>,
        },
        {
          path: "mubarak",
          element: <PrivateRoute><MubarakAli></MubarakAli></PrivateRoute>,
        }
      ]
  },
]);


export default router;