import { useReducer, useRef, useState } from "react";
import Portal from "../../Components/Portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

const Chatbot = ({flag,setflag}) => {


return (<Portal flag={flag}>
       
        <div className="relative w-10/12 h-full backdrop-blur-xs mx-auto pt-4 text-white">
                        
             <span onClick={()=>setflag(false)}>
                            <FontAwesomeIcon className="absolute text-2xl -top-5 -right-3 cursor-pointer" icon={faXmark} />
             </span>
                      
             <ChatBox />
             <ChatInput />
        </div>

        </Portal>)
}

export default Chatbot;