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
          path:"/login",
          element:<LoginPage/>
        }
      ]
    },
    
    
  ])

  return (
     <RouterProvider router={router}/>
  )
}

export default App
