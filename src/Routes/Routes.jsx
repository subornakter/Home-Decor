import { createBrowserRouter } from 'react-router'
import MainLayout from '../RootLayouts/MainLayout.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import React from 'react'
import Home from '../pages/Home.jsx'
import Products from '../pages/Products.jsx'
import Wishlist from '../pages/Wishlist.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
const router = createBrowserRouter([
  {
      path: '/',
    element: <MainLayout />,
     errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        
            {
        index: true,
        Component: Home,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },

        
    ]
  },
]);
export default router