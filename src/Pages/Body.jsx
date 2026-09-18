import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from '../Components/SignIn'
import Browser from '../Components/Browser'

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