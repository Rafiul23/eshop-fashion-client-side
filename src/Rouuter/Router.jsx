import { createBrowserRouter } from "react-router";
import Home from "./../pages/Home/Home";
import MainLayout from './../components/Layouts/MainLayout';
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import CollectionPage from "../pages/CollectionPage/CollectionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/collections/:collection',
          element: <CollectionPage></CollectionPage>
        }
    ],
  },
]);

export default router;
