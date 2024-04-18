import { Button } from '@material-tailwind/react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import RootLayout from './pages/Layouts/BaseLayout'
import ErrorLayout from './pages/Layouts/ErrorLayout'
import LoginPage from './pages/LoginPage'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorLayout/>,
      children:[
        {index:true,
        element:<LandingPage/>
        },
        {
          path:'/Dashboard',
          element:<LoginPage/>,
        },
        {
          path:'/about',
          element:<h1>This is about page</h1>
        },
        {
          path:'/contact',
          element:<h1>This is contact us page</h1>
        },
      ]
    },
    
    
    
  ])

  return (
     <RouterProvider router={router}/>
  )
}

export default App
