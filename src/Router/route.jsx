import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Login from "../components/Login";
import Register from "../components/Register";
import UserProfile from "../components/UserProfile";
import OrderHistory from "../components/OrderHistory";
import AdminDashboard from "../components/admin/AdminDashboard";
import About from "../components/About";
import ContactUs from "../components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        children: [
          { index: true, element: <Shop /> },
          { path: ":category", element: <Shop /> },
        ],
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <UserProfile /> },
      { path: "orders", element: <OrderHistory /> },
      { path: "admin", element: <AdminDashboard /> },
      { path: "about", element: <About /> },
      {
      path: "contact",element : <ContactUs></ContactUs>
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
