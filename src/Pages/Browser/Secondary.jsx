import { useSelector } from "react-redux"
import Category from "../../Components/Category"
import { langConstant } from "../../utils/langConstant"


const Secondary = () => {
  
const Movie=useSelector(store=>store.newMovie)
const lang=useSelector(store => store.config.lang)


 
  return (
    <div className="relative z-10 -mt-24 flex flex-col gap-8 pb-12 sm:-mt-32 sm:gap-12 sm:pb-16 lg:-mt-20 lg:gap-16 lg:pb-20">
       
         <Category title={langConstant[lang].nowplaying} detail={Movie.movie} />

         <Category title={langConstant[lang].upcomingmovie} detail={Movie.upcoming} />
         
         <Category title={langConstant[lang].popular} detail={Movie.popular} />

         <Category title={langConstant[lang].toprated} detail={Movie.toprated} />

    </div>
  )
}

export default Secondary;