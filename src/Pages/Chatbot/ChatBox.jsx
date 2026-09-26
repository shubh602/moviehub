import React from 'react'
import { useSelector } from 'react-redux'

const ChatBox = () => {

    const chatbot=useSelector(store=>store.chatbot.chats)
    
  return (
     <div className="overflow-y-scroll flex flex-col space-y-8 h-10/12 px-6 text-black font-semibold">
                    
                               {
                                chatbot.map(chat=>
                                <div className={`${chat.sender=='user'?"ml-auto bg-gray-500 text-white    ":"mr-auto bg-white "} max-w-5/12 text-start px-4 py-4 rounded-lg`}>
                                    
                                      {typeof chat.data == 'object'?
                                      <ul className="space-y-2 px-6 list-disc">
                                        {chat.data.map(list=><li className="cursor-pointer underline decoration-dashed hover:opacity-70 hover:text-orange-900">{list}</li>)}
                                      </ul>
                                      :chat.data}
                                </div>)
                               }

      </div>
  )
}

export default ChatBox