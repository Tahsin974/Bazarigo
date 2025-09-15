import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomeLayOut/HomePage";
import CategoryPageLayOut from "../Pages/CategoryPage/CategoryPageLayOut";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import FeaturesPageLayOut from "../Pages/FeaturesPage/FeaturesPageLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:category",
        element: <CategoryPageLayOut />,
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/features",
        element: <FeaturesPageLayOut />,
      },
    ],
  },
]);
