import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './SignIn'
import Browser from './Browser/Browser.jsx'
import Play from './Play/Play.jsx'

const Body = () => {

   const appRouter=createBrowserRouter([
     {
       path:"/",
       element:<SignIn />
     },{
      path:"/browser",
      element:<Browser />
     },{
      path:"/browser/play",
      element:<Play />
     }
   ])

  return <RouterProvider router={appRouter} />
}

export default Body