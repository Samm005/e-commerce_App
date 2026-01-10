import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { lazy, Suspense } from "react";

const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

const approutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              color: "#bbf900",
              background:
                "radial-gradient(circle at top, #2b1055 0%, #1a1a2e 50%, #000000 100%)",
            }}
          >
            Please wait! Loading....
          </h2>
        }
      >
        <RouterProvider router={approutes} />
      </Suspense>
    </Provider>
  </StrictMode>
);
