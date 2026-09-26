import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';

import { langConstant } from "../../utils/langConstant";
import client from "../../utils/openAI";
import { addChat } from "../../utils/chatbotSlice";
import { useRef } from 'react';



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


        // const InstFilter=`You are a helpful movie recommendation assistant.
        //             Keep your answers short and friendly.
        //             Return maximum 10 movie recommendations whenever enough suitable movies exist.
        //             Return the recommendations as a JavaScript array of movie titles.

        //             Example:
        //             ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"]`

        // const response = await client.responses.create({
        //                 model: 'GPT-5 nano',
        //                 instructions: InstFilter,
        //                 input:InputText.current.value,
        //                 }).catch(error =>console.log(error))

        //               const botSender={
        //                      sender:'bot',
        //                      data: response.output_text,
        //                     }  
        //               dispatch(addChat(botSender)) 
                      
                      

      const movieList=["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10"];
        setTimeout(() => {
            const botSender={
            sender:'bot',
            // data: "hello how are you",
            data:movieList,
            }
          dispatch(addChat(botSender))
        }, 500);
     
        
    }

  return (
     <div className="w-full fixed bottom-2 flex items-center justify-center p-4 text-black">

                                    <input placeholder={langConstant[lang].gptplaceholder} ref={InputText}
                                            type="text" className="bg-white w-8/12 h-10 rounded-4xl pl-4 pr-10" name="" id="" />

                                    <button className="-ml-8 cursor-pointer"
                                             onClick={handlechatcall}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                            </div>
  )
}

export default ChatInput