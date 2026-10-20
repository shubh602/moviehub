import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ChatBox = () => {

    const chatbot=useSelector(store=>store.chatbot.chats)
    const navigation=useNavigate()

    const handleSearch=(list)=>{
       console.log(list)
       navigation(`/browser/search/${list}`)
    }
    
  return (
     <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pb-4 pt-12 font-semibold text-black sm:gap-5 sm:px-6 sm:pt-14">
                    
                               {
                                chatbot.map(chat=>
                                <div className={`${chat.sender=='user'?"ml-auto bg-orange-600 text-white ":"mr-auto border border-white/10 bg-zinc-100 text-zinc-900 "} max-w-[88%] break-words rounded-2xl px-4 py-3 text-start shadow-md sm:max-w-10/12 sm:px-5 sm:py-4`}>
                                    
                                      {

                                      (chat.data.length  > 1 && typeof chat.data == 'object') 
                                      ?
                                      <ul className="space-y-2 px-6 list-disc">
                                        {chat.data.map((list,index)=>
                                        <li onClick={()=>handleSearch(list)} 
                                           key={index} className="cursor-pointer underline decoration-dashed underline-offset-4 transition-colors hover:text-orange-500">
                                          {list}
                                        </li>)}
                                      </ul>
                                      :
                                      (chat.data.length == 1  && typeof chat.data == 'object') ? chat.data[0] : chat.data

                                      }
                                </div>)
                               }

      </div>
  )
}

export default ChatBox