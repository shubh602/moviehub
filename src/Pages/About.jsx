import { useSelector } from "react-redux";
import Header from "../Components/Header"
import { About_Image } from "../utils/Constant";
import { aboutConstant } from "../utils/langConstant";

const About = () => {

    const lang=useSelector(store=>store.config.lang)

  return (
    <div className="bg-black text-white min-h-dvh pb-10">
        <Header />
        
        <img className="absolute z-0 w-full h-96 bg-cover"  
             src={About_Image} alt="" />

       <div className="relative flex flex-col z-10 pt-52 mx-10">
            <div className="text-gray-200 flex flex-col md:flex-row justify-center items-end font-bold pb-20">
                <span className="text-6xl text-center lg:text-9xl">{aboutConstant[lang].logo}</span>
                <span className="text-gray-100 text-[6px] pt-4  lg:text-xs font-extrabold">{aboutConstant[lang].quote}</span>
            </div>

            <div className="pt-12">
                <span className="font-bold text-3xl">{aboutConstant[lang].welcome}</span> <br /><br />

                {aboutConstant[lang].content1}
                <br /> 
                {aboutConstant[lang].content2}
            </div>
         
            <div className="pt-10 flex flex-col">
                        <span className="font-extrabold text-xl pb-2">{aboutConstant[lang].mission}</span>
                        <span>{aboutConstant[lang].missionContent}</span>
            </div>

        </div>      

    </div>
  )
}

export default About;