import { useSelector } from "react-redux"
import Header from "../Components/Header"
import { langConstant } from "../utils/langConstant"
import Card from "../Components/Card"


const PlayList = () => {
 
    const lang=useSelector(store=>store.config.lang)
    const playlist=useSelector(store=>store.playlist.list)

  return (
    <div className="bg-black text-white min-h-dvh">
        <Header />
        <div className="pt-32 px-6">
         <span className="text-5xl font-bold">{langConstant[lang].playlist}</span>

           <div className="mx-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 space-y-10 space-x-14 pt-10">
                  {
                    playlist && playlist.map(item=><Card key={item.id} playlist={true} item={item} />)
                  }
           </div>

        </div>
    </div>
  )
}

export default PlayList