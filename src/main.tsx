import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErroPage from './ErroPage.tsx';
import Homepage from './Homepage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErroPage />,
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
