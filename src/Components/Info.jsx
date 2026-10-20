import React from 'react'
import Portal from './Portal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Card_Img_CDN } from '../utils/Constant'

const Info = ({flag,setFlag,item,setHoverShow}) => {
       // console.log(item);
       
       const {original_title,overview,release_date,poster_path,title}=item

return(<Portal flag={flag}>
                 <div className="mx-auto w-8/12 h-[550px] flex ">
                        <div className="w-6/12 bg-gray-600">
                              <img 
                              className='h-full w-full'
                              src={`${Card_Img_CDN}${poster_path}`} alt="" />
                        </div>
                        <div className="w-6/12 relative bg-black/90 text-white flex flex-col text-center p-6">
                                  <span className='text-6xl pb-14 font-bold'>{original_title}</span>
                                  <span className='text-sm font-semibold'>{overview}</span>
                                  <span className='pt-12 text-end font-bold'>- {title}</span>
                                  <span className='absolute bottom-4 text-xs font-extrabold'>{release_date}</span>
                        </div>
                 </div>

                 <FontAwesomeIcon 
                            onClick={()=>{
                              setHoverShow && setHoverShow(false)
                              setFlag(false)
                        }}
                            className='text-white absolute right-56 top-8 text-2xl cursor-pointer'
                            icon={faXmark} />

       </Portal>
  )
}

export default Info