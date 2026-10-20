import Header from "../../Components/Header"
import useNewMovies from "../../hooks/useNewMovie"
import Main from "./Main";
import Secondary from "./Secondary";
import usePopularMovie from "../../hooks/usePopularMovie";
import useTopRatedMovie from "../../hooks/useTopRatedMovie";
import useUpcomingMovie from "../../hooks/useUpcomingMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Chatbot from "../Chatbot/Chatbot";



const Browser = () => {

  const [flag,setflag]=useState(false)

  useNewMovies();
  usePopularMovie()
  useTopRatedMovie()
  useUpcomingMovie()

  return (<div className={`${flag && "pointer-events-none h-dvh overflow-y-hidden"} min-h-dvh bg-black text-white`}>
             <Header />
                     <Chatbot flag={flag} setflag={setflag} />
                

                 {/* Chatbot Icon start */}
                     <span onClick={()=>setflag(true)}
                        className="fixed bottom-4 right-4 z-30 grid size-12 place-items-center rounded-full bg-orange-600 text-xl text-white shadow-lg shadow-orange-950/40 transition-transform hover:scale-105 hover:bg-orange-500 cursor-pointer sm:bottom-6 sm:right-6 sm:size-14 sm:text-2xl">
                        <FontAwesomeIcon icon={faRobot} />
                     </span>
                 {/* Chatbot Icon End */}


                     <Main />
                     <Secondary />
         </div>)
}

export default Browser  