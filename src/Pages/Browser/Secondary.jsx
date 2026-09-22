import { useSelector } from "react-redux"
import Category from "./Category"
import { langConstant } from "../../utils/langConstant"


const Secondary = () => {
  
const Movie=useSelector(store=>store.newMovie)
const lang=useSelector(store => store.config.lang)


 
  return (
    <div className="-mt-80 lg:-mt-18 pb-20 pl-6 flex flex-col space-y-10 lg:space-y-20 z-10 relative">
       
         <Category title={langConstant[lang].nowplaying} detail={Movie.movie} />

         <Category title={langConstant[lang].upcomingmovie} detail={Movie.upcoming} />
         
         <Category title={langConstant[lang].popular} detail={Movie.popular} />

         <Category title={langConstant[lang].toprated} detail={Movie.toprated} />

    </div>
  )
}

export default Secondary  