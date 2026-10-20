import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { langConstant } from "../../utils/langConstant";
import { addChat } from "../../utils/chatbotSlice";
import { useRef } from 'react';
import groq from '../../utils/groq';



const ChatInput = () => {

  const dispatch=useDispatch()
  const InputText=useRef()
  const lang=useSelector(store => store.config.lang)





const handlechatcall=async()=>{
        const userSender={
            sender:'user',
            data: InputText.current.value,
        }
        dispatch(addChat(userSender))


        const InstFilter=`We are Movie_hub , You are a helpful movie recommendation assistant Movie_hub.
                    Keep your answers short and friendly.
                    Return maximum 10 movie recommendations whenever enough suitable movies exist.
                    Return the recommendations as a JavaScript array of movie titles.
                    and even if it normal message always wrap in an JavaScript array
                    
                    Example for data:
                    ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"]
                    
                    Example for message:
                    ["Hello i am Movie_hub Chatbot"]
                    `

                    

          const response = await groq.chat.completions.create({
                          model: "openai/gpt-oss-120b",
                          messages: [
                            {
                              role: "system",
                              content:InstFilter,
                            },
                            {
                              role: "user",
                              content:InputText.current.value ,
                            },
                          ],
                        });



        console.log(response);
                        

       const botSender={
            sender:'bot',
            data: JSON.parse(response.choices[0].message.content),
            }

       dispatch(addChat(botSender))

                      


    }

  return (
     <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 border-t border-white/10 bg-zinc-950/95 p-3 text-black backdrop-blur sm:gap-3 sm:p-4">

                                    <input placeholder={langConstant[lang].gptplaceholder} ref={InputText}
                                            type="text" className="h-11 min-w-0 flex-1 rounded-full border border-zinc-300 bg-white px-4 pr-12 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 sm:text-base" name="" id="" />

                                    <button className="-ml-14 grid size-10 shrink-0 place-items-center rounded-full bg-orange-600 text-white transition-colors hover:bg-orange-500 cursor-pointer"
                                             onClick={handlechatcall}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                            </div>
  )
}

export default ChatInput