import { useSelector } from "react-redux"
import Category from "./Category"


const Secondary = () => {
  
const Movie=useSelector(store=>store.newMovie)

 
  return (
    <div className="-mt-20 pb-20 pl-6 flex flex-col space-y-20 z-10 relative">
       
         <Category title={"Now Playing"} detail={Movie.movie} />

         <Category title={"Upcoming Movie's"} detail={Movie.upcoming} />
         
         <Category title={"Popular"} detail={Movie.popular} />

         <Category title={"Top Rated"} detail={Movie.toprated} />

    </div>
  )
}

export default Secondary  