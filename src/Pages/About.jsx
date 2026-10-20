import { useSelector } from "react-redux";
import Header from "../Components/Header"
import { About_Image } from "../utils/Constant";
import { aboutConstant } from "../utils/langConstant";

const About = () => {

    const lang=useSelector(store=>store.config.lang)

  return (
    <div className="bg-black text-white min-h-dvh pb-10">
        <Header />
        
        <img className="absolute inset-x-0 top-0 z-0 h-72 w-full object-cover object-center opacity-75 sm:h-96"
             src={About_Image} alt="" />

       <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-8 pt-40 sm:px-8 sm:pt-52">
            <div className="flex flex-col items-center justify-center gap-2 pb-12 text-center font-bold text-gray-200 sm:pb-16 md:flex-row md:items-end md:gap-4">
                <span className="text-5xl sm:text-7xl lg:text-8xl">{aboutConstant[lang].logo}</span>
                <span className="max-w-xl pt-2 text-xs font-extrabold text-gray-100 sm:text-sm">{aboutConstant[lang].quote}</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/55 p-5 text-sm leading-relaxed text-white/80 shadow-xl backdrop-blur-sm sm:p-8 sm:text-base">
                <span className="font-bold text-2xl text-white sm:text-3xl">{aboutConstant[lang].welcome}</span> <br /><br />

                {aboutConstant[lang].content1}
                <br /> 
                {aboutConstant[lang].content2}
            </div>
         
            <div className="flex flex-col pt-8">
                        <span className="pb-2 text-lg font-extrabold text-orange-400 sm:text-xl">{aboutConstant[lang].mission}</span>
                        <span>{aboutConstant[lang].missionContent}</span>
            </div>

        </div>      

    </div>
  )
}

export default About;