import { useState } from "react";
import Portal from "../../Components/Portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { langConstant } from "../../utils/langConstant";

const Chatbot = ({flag,setflag}) => {

    const lang=useSelector(store => store.config.lang)

return (<Portal flag={flag}>
                    <div className="relative w-10/12 h-full backdrop-blur-xs mx-auto pt-4 text-white">
                        
                        {/* cancle icon start */}
                            <span onClick={()=>setflag(false)}>
                            <FontAwesomeIcon className="absolute text-2xl top-4 -right-8 cursor-pointer" icon={faXmark} />
                            </span>

                        {/* cancle icon end */}


                            <div className="overflow-y-scroll flex flex-col space-y-8 h-10/12 px-6 text-black font-semibold">

                                    <div className="max-w-5/12 ml-auto text-start bg-gray-500 text-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque officia vero!
                                    </div>

                                    <div className="max-w-5/12 mr-auto text-start bg-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea voluptas reiciendis repellendus asperiores, eum in. Sed commodi distinctio earum quis rem debitis non.
                                    </div>

                                    <div className="max-w-5/12 ml-auto text-start bg-gray-500 text-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque officia vero!
                                    </div>

                                    <div className="max-w-5/12 mr-auto text-start bg-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea voluptas reiciendis repellendus asperiores, eum in. Sed commodi distinctio earum quis rem debitis non.
                                    </div>  
                                            
                                    <div className="max-w-5/12 ml-auto text-start bg-gray-500 text-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque officia vero!
                                    </div>      

                                    <div className="max-w-5/12 mr-auto text-start bg-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea voluptas reiciendis repellendus asperiores, eum in. Sed commodi distinctio earum quis rem debitis non.
                                    </div>  
                                            

                                    <div className="max-w-5/12 mr-auto text-start bg-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea voluptas reiciendis repellendus asperiores, eum in. Sed commodi distinctio earum quis rem debitis non.
                                    </div>  

                                    <div className="max-w-5/12 ml-auto text-start bg-gray-500 text-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque officia vero!
                                    </div>                                    

                                    <div className="max-w-5/12 mr-auto text-start bg-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea voluptas reiciendis repellendus asperiores, eum in. Sed commodi distinctio earum quis rem debitis non.
                                    </div>  

                                    <div className="max-w-5/12 ml-auto text-start bg-gray-500 text-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque officia vero!
                                    </div>       

                                    <div className="max-w-5/12 mr-auto text-start bg-white px-4 py-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea voluptas reiciendis repellendus asperiores, eum in. Sed commodi distinctio earum quis rem debitis non.
                                    </div>  
                                            
                            </div>

                            <div className="w-full fixed bottom-2 flex items-center justify-center p-4 text-black">

                                    <input placeholder={langConstant[lang].gptplaceholder} 
                                            type="text" className="bg-white w-8/12 h-10 rounded-4xl pl-4 pr-10" name="" id="" />

                                    <button className="-ml-8 cursor-pointer">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                            </div>

                    </div>
        </Portal>)
}


export default Chatbot;