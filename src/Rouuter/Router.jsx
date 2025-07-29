import { createBrowserRouter } from "react-router";
import Home from "./../pages/Home/Home";
import MainLayout from './../components/Layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ],
  },
]);

export default router;
