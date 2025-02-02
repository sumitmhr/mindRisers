import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './components/RootLayout'
import ItemList from './pages/ItemList'

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          // path: 'home',
          index: true,
          element: <Home />,
        },
        {
          path: 'about', 
          element: <About />
        },
        {
          path: 'category-items/:label', 
          element: <ItemList />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App