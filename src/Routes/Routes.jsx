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
        element: <Details></Details>,
      },
      {
        path: "/kid",
        element: <Kid></Kid>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <GGrandChild></GGrandChild>,
    children:
      [
        {
          path: "abeda",
          element: <AbedaKhatun></AbedaKhatun>,
        },
        {
          path: "saaleh",
          element: <SaalehAhmed></SaalehAhmed>,
        },
        {
          path: "nojir",
          element: <NojirAhmed></NojirAhmed>,
        },
        {
          path: "jalal",
          element: <JalalAhmed></JalalAhmed>,
        },
        {
          path: "julakha",
          element: <JulekhaKhatun></JulekhaKhatun>,
        },
        {
          path: "anjumum",
          element: <AnjumunNahar></AnjumunNahar>,
        },
        {
          path: "mubarak",
          element: <MubarakAli></MubarakAli>,
        },
      ]
  },
]);


export default router;