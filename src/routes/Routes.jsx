import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AllCampaign from "../components/AllCampaign";
import MyDonations from "../components/MyDonations";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddNewCampaign from "../components/AddNewCampaign";
import MyCampaign from "../components/MyCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../pages/Footer";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DetailsPages from "../components/DetailsPages";
import RunningCampaigns from "../components/RunningCampaigns";
import RunningSingleCampaing from "../components/RunningSingleCampaing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch("http://localhost:5000/crowd"),
      },

      {
        path: "/allCampaign/:id",
        element: <DetailsPages></DetailsPages>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crowd/${params.id}`),
      },

      {
        path: "/myDonations",
        element: (
          <PrivateRoutes>
            <MyDonations></MyDonations>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addNewCampaign",
        element: (
          <PrivateRoutes>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoutes>
        ),
      },
      {
        path: "/runnignCampaings",
        element: <RunningCampaigns></RunningCampaigns>,
      },
      // {
      //   path: "/runnignCampaings/:id",
      //   element: <RunningCampaigns></RunningCampaigns>,
      //   loader: () => fetch(`http://localhost:5000/crowd`),
      // },
      {
        path: "/runnignCampaings/:id",
        element: <RunningSingleCampaing></RunningSingleCampaing>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crowd/${params.id}`),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoutes>
            <MyCampaign></MyCampaign>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
export default router;
