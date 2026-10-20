import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './SignIn'
import Browser from './Browser/Browser.jsx'
import Play from './Play/Play.jsx'
import useNewMovies from '../hooks/useNewMovie.js'
import usePopularMovie from '../hooks/usePopularMovie.js'
import useTopRatedMovie from '../hooks/useTopRatedMovie.js'
import useUpcomingMovie from '../hooks/useUpcomingMovie.js'
import Search from './Search.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import PlayList from './PlayList.jsx'

const Body = () => {

  
  useNewMovies();
  usePopularMovie()
  useTopRatedMovie()
  useUpcomingMovie()

   const appRouter=createBrowserRouter([
     {
       path:"/",
       element:<SignIn />
     },{
      path:"/browser",
      element:<Browser />
     },{
      path:"/browser/play/:id",
      element:<Play />
     },{
      path:"/browser/search/:name",
      element:<Search />
     },{
      path:"/browser/about",
      element:<About />
     },{
      path:"/browser/contact",
      element:<Contact />
     },{
      path:"/browser/playlist",
      element:<PlayList />
     }
   ])

  return <RouterProvider router={appRouter} />
}

export default Body