import { useSelector } from "react-redux"
import Category from "../../Components/Category"
import Header from "../../Components/Header"
import PlayMain from "./PlayMain"
import { useParams } from "react-router-dom"
import useSearchById from "../../hooks/useSearchById"
import useRecommended from "../../hooks/useRecommended"
import { langConstant } from "../../utils/langConstant"

const Play = () => {
   const {id}=useParams();

   const data=useSearchById(id)
   const Recommandation=useRecommended(id)
   const lang=useSelector(store=>store.config.lang)

   

   if(!data && !Recommandation) return;

    const Movie=useSelector(store=>store.newMovie)

  return (
    <div className="bg-black text-white pb-10">
        <Header />
        <PlayMain data={data} />
        <Category title={langConstant[lang].related} detail={Recommandation}  />
    </div>
  )
}

export default Play