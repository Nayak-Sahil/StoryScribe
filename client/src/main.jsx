import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Authentication/Login';
import AuthLayout from './Authentication/AuthLayout';
import Register from './Authentication/Register';
import ResetPassword from './Authentication/ResetPassword';
import { AuthOptions } from './Authentication/AuthOptions';
import DashboardLayout from './Dashboard/DashboardLayout';
import WriterDashboard from './Dashboard/WriterDashboard';

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
        path: "",
        element: <AuthOptions />
      },
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
  {
    path: "/Dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <WriterDashboard />
      },
      {
        path: "manage-blogs",
        element: "asd"
      },
      {
        path: "my-drafts",
        element: "asdasd"
      },
      {
        path: "bookmark",
        element: ""
      },
      {
        path: "account-settings",
        element: ""
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
