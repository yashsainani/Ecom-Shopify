import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import Login from "./Containers/Login/Login";
import Home from "./Containers/Home/Home";
import store from "./Store";
import Layout from "./Containers/Layout/Layout";
import Products from "./Containers/Products/Products";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import User from "./Containers/User/User";
import Contact from "./Containers/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;