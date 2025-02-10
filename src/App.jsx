import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './components/RootLayout'
import ItemList from './pages/ItemList'
import ItemsDetail from './pages/ItemsDetail'
import AddForm from './pages/AddForm'
import EditForm from './pages/EditForm'

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
        {
          path: 'item-detail/:id', 
          element: <ItemsDetail />
        },
        {
          path: 'add-form', 
          element: <AddForm />
        },
        {
          path: 'edit-form/:id', 
          element: <EditForm />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App