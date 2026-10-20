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
        <div className="mx-auto max-w-screen-2xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-10">
         <span className="text-3xl font-bold tracking-tight sm:text-4xl">{langConstant[lang].playlist}</span>

           <div className="grid grid-cols-2 justify-items-center gap-4 pt-7 sm:grid-cols-3 sm:gap-6 sm:pt-9 lg:grid-cols-4 xl:grid-cols-5">
                  {
                    playlist && playlist.map(item=><Card key={item.id} playlist={true} item={item} />)
                  }
           </div>

        </div>
    </div>
  )
}

export default PlayList