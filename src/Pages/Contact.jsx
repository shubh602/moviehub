import { useSelector } from 'react-redux'
import Header from '../Components/Header'
import { langConstant } from '../utils/langConstant'

const Contact = () => {

  const lang=useSelector(store=>store.config.lang)

  return (
    <div className='min-h-dvh'>
        <Header />
        <img  className='fixed z-0 w-full h-dvh'
        src="https://img.magnific.com/free-photo/3d-render-concept-phone-receiver-3d-art-design-illustration_460848-9667.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <div className="relative z-10 flex flex-col md:flex-row pt-32 px-4 lg:px-8">

              <div className=" bg-black/60 w-full md:w-7/12 text-white flex items-center justify-center text-8xl font-bold rounded-tl-2xl rounded-bl-2xl">
                        <div className='text-center text-wrap'>{langConstant[lang].contactquote}</div>
                        {/* <span className='font-bold text-xs'>We'ed Love To hear you</span> */}
              </div>
              
              <div className=" bg-black/20 w-full md:w-8/12 p-5 flex flex-col space-y-10 items-end ml-auto rounded-tr-2xl rounded-br-2xl">
                    
                    <input type="text" placeholder={langConstant[lang].contactname} 
                    className='bg-white w-full h-14 lg:h-20 rounded-lg p-5 font-bold' name="" id="" />
                   
                    <input type="text" placeholder={langConstant[lang].contactemail} 
                    className='bg-white w-full h-20 rounded-lg p-5 font-bold' name="" id="" />
                   
                     <textarea name="" id="" placeholder={`${langConstant[lang].contactmsg} ......`}
                     className='bg-white w-full h-48 rounded-lg p-5 font-bold'>
                     </textarea>

                     <button 
                     className='bg-orange-600 px-5 py-3 text-white text-3xl font-bold rounded-lg cursor-pointer hover:opacity-90'>
                     {langConstant[lang].submit}</button>

              </div>
        </div>
    </div>
  )
}

export default Contact