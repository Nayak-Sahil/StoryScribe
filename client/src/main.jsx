import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Authentication/Login';
import AuthLayout from './Authentication/AuthLayout';
import Register from './Authentication/Register';
import ResetPassword from './Authentication/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: "<h1>Welcome to StoryScribe</h1>"
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "reset-password",
        element: <ResetPassword />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
