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

  return (<div className={`${flag && "pointer-events-none h-dvh overflow-y-hidden"} scrollbar-none bg-black text-white`}>
             <Header />
                     <Chatbot flag={flag} setflag={setflag} />
                

                 {/* Chatbot Icon start */}
                     <span onClick={()=>setflag(true)}
                        className="fixed z-30 bottom-18 right-18 px-4 py-4 text-3xl rounded-full bg-orange-600 text-white cursor-pointer hover:opacity-70">
                        <FontAwesomeIcon icon={faRobot} />
                     </span>
                 {/* Chatbot Icon End */}


                     <Main />
                     <Secondary />
         </div>)
}

export default Browser  