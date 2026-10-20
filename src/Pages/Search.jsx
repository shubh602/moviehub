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
        <div className="pt-28 px-5 pb-6">
           <span className="font-semibold">Search Result for : <span className="underline italic text-blue-400">{name}</span> </span>
 
            <div className="pt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5  space-x-14 space-y-14 items-center">

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