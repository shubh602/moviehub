import { useReducer, useRef, useState } from "react";
import Portal from "../../Components/Portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

const Chatbot = ({flag,setflag}) => {


return (<Portal flag={flag}>
       
        <div className="relative mx-auto my-auto flex h-[min(42rem,calc(100dvh-3rem))] w-[calc(100%-1rem)] max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 pt-5 text-white shadow-2xl shadow-black/60 backdrop-blur-xl sm:w-[calc(100%-3rem)] sm:pt-6">
                        
             <span onClick={()=>setflag(false)}>
                            <FontAwesomeIcon className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-xl transition-colors hover:bg-orange-600 sm:right-4 sm:top-4" icon={faXmark} />
             </span>
                      
             <ChatBox />
             <ChatInput />
        </div>

        </Portal>)
}

export default Chatbot;