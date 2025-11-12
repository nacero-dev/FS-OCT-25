import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./componentes/home";
import About from "./componentes/about";
import User from "./componentes/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/user/:id", element: <User /> },
    ],
  },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
