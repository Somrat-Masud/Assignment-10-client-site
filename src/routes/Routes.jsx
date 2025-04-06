import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AllCampaign from "../components/AllCampaign";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddNewCampaign from "../components/AddNewCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../pages/Footer";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DetailsPages from "../components/DetailsPages";
import MyCampaign from "../components/MyCampaign";
import UpdateCampaignPage from "../components/UpdateCampaignPage";
import MyDonations from "../components/MyDonations";
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
        path: "/campaigns",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch("http://localhost:5000/campaigns"),
      },

      {
        path: "/allCampaign/:id",
        element: <DetailsPages></DetailsPages>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/${params.id}`),
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
        path: "/addCampaign",
        element: (
          <PrivateRoutes>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoutes>
        ),
      },
      {
        path: "/runningCampaigns",
        element: <RunningCampaigns></RunningCampaigns>,
      },
      {
        path: "/runningCampaigns/:id",
        element: <RunningSingleCampaing />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/${params.id}`),
      },

      {
        path: "/myCampaign",
        element: (
          <PrivateRoutes>
            <MyCampaign></MyCampaign>
          </PrivateRoutes>
        ),
      },
      // Update Campaign Page
      {
        path: "/updateCampaign/:id",
        element: <UpdateCampaignPage></UpdateCampaignPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myCampaign/${params.id}`),
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
