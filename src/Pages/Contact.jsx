import { useSelector } from 'react-redux'
import Header from '../Components/Header'
import { langConstant } from '../utils/langConstant'

const Contact = () => {

  const lang=useSelector(store=>store.config.lang)

  return (
    <div className='min-h-dvh'>
        <Header />
        <img  className='fixed inset-0 z-0 h-full w-full object-cover object-center'
        src="https://img.magnific.com/free-photo/3d-render-concept-phone-receiver-3d-art-design-illustration_460848-9667.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-8 pt-24 sm:px-6 sm:pt-28 md:flex-row lg:px-8">

              <div className="flex min-h-48 w-full items-center justify-center rounded-2xl bg-black/70 p-6 text-4xl font-bold text-white shadow-xl backdrop-blur-sm sm:min-h-56 sm:text-6xl md:min-h-[32rem] md:w-5/12 md:rounded-r-none lg:text-7xl">
                        <div className='text-center text-wrap'>{langConstant[lang].contactquote}</div>
                        {/* <span className='font-bold text-xs'>We'ed Love To hear you</span> */}
              </div>
              
              <div className="ml-auto flex w-full flex-col items-end gap-4 rounded-2xl bg-black/60 p-4 shadow-xl backdrop-blur-md sm:gap-5 sm:p-6 md:w-7/12 md:rounded-l-none md:py-8">
                    
                    <input type="text" placeholder={langConstant[lang].contactname} 
                    className='h-12 w-full rounded-lg border border-white/20 bg-white px-4 font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 sm:h-14 sm:px-5' name="" id="" />
                   
                    <input type="text" placeholder={langConstant[lang].contactemail} 
                    className='h-12 w-full rounded-lg border border-white/20 bg-white px-4 font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 sm:h-14 sm:px-5' name="" id="" />
                   
                     <textarea name="" id="" placeholder={`${langConstant[lang].contactmsg} ......`}
                     className='h-36 w-full resize-y rounded-lg border border-white/20 bg-white px-4 py-3 font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 sm:h-48 sm:px-5'>
                     </textarea>

                     <button 
                     className='rounded-lg bg-orange-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-orange-950/30 transition-colors hover:bg-orange-500 cursor-pointer sm:text-xl'>
                     {langConstant[lang].submit}</button>

              </div>
        </div>
    </div>
  )
}

export default Contact