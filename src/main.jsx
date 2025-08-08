import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
 
  RouterProvider,
  StaticRouterProvider,
} from "react-router";
import { router } from './Router/route.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)
