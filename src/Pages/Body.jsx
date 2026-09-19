import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './SignIn'
import Browser from './Browser/Browser.jsx'

const Body = () => {

   const appRouter=createBrowserRouter([
     {
       path:"/",
       element:<SignIn />
     },{
      path:"/browser",
      element:<Browser />
     }
   ])

  return <RouterProvider router={appRouter} />
}

export default Body