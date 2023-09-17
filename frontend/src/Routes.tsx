
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Home from "./pages/private/Home";


export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastrar',
    element: <Register />
  },
]);