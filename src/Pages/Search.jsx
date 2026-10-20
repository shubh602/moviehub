import { useSelector } from "react-redux"
import Header from "../Components/Header"
import { useParams } from "react-router-dom"
import useSearchMovie from "../hooks/useSearchMovie";
import Card from '../Components/Card'

const Search = () => {

  const {name}= useParams();
  const search=name && useSearchMovie(name)

   console.log(search);

   if(!search) return

  return (
    <div className="min-h-dvh w-full bg-black text-white">
        <Header />
        <div className="mx-auto max-w-screen-2xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-10">
           <span className="text-base font-semibold text-white/80 sm:text-lg">Search Result for : <span className="italic text-orange-400 underline underline-offset-4">{name}</span> </span>
 
            <div className="grid grid-cols-2 justify-items-center gap-4 pt-8 sm:grid-cols-3 sm:gap-6 sm:pt-10 lg:grid-cols-4 xl:grid-cols-5">

             {
              search.map(item=>
                  item.poster_path && <Card item={item} /> //showing card's which has Poster
             )}

            </div>
 
             
             
             {/* <Card  />   */}

        </div>
    </div>
  )
}

export default Search