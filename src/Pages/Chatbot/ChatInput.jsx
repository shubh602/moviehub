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
     <div className="w-full fixed bottom-2 flex items-center justify-center p-4 text-black">

                                    <input placeholder={langConstant[lang].gptplaceholder} ref={InputText}
                                            type="text" className="bg-white w-8/12 h-10 rounded-4xl pl-4 pr-10" name="" id="" />

                                    <button className="-ml-12 px-4 py-2 cursor-pointer bg-black text-white font-bold rounded-r-3xl hover:opacity-90"
                                             onClick={handlechatcall}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                            </div>
  )
}

export default ChatInput