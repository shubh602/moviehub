import React from 'react'
import Portal from './Portal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Card_Img_CDN } from '../utils/Constant'

const Info = ({flag,setFlag,item,setHoverShow}) => {
       // console.log(item);
       
       const {original_title,overview,release_date,poster_path,title}=item

return(<Portal flag={flag}>
                 <div className="mx-auto flex max-h-[calc(100dvh-6rem)] min-h-0 w-[calc(100%-1rem)] max-w-5xl flex-col overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 sm:w-[calc(100%-3rem)] sm:flex-row">
                        <div className="h-48 w-full shrink-0 bg-gray-600 sm:h-auto sm:w-5/12">
                              <img 
                              className='h-full w-full object-cover'
                              src={`${Card_Img_CDN}${poster_path}`} alt="" />
                        </div>
                        <div className="relative flex min-h-64 w-full flex-col bg-zinc-950/95 p-5 pb-12 text-center text-white sm:w-7/12 sm:p-7 sm:pb-14">
                                  <span className='break-words pb-5 text-2xl font-bold sm:pb-8 sm:text-4xl lg:text-5xl'>{original_title}</span>
                                  <span className='text-sm leading-relaxed text-white/80 sm:text-base'>{overview}</span>
                                  <span className='pt-6 pb-4 text-end font-bold text-white/90 sm:pt-8'>- {title}</span>
                                  <span className='absolute bottom-4 left-5 text-xs font-extrabold text-white/60 sm:left-7'>{release_date}</span>
                        </div>
                 </div>

                 <FontAwesomeIcon 
                            onClick={()=>{
                              setHoverShow && setHoverShow(false)
                              setFlag(false)
                        }}
                            className='absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-black/70 p-2 text-xl text-white transition-colors hover:bg-orange-600 sm:right-6 sm:top-6'
                            icon={faXmark} />

       </Portal>
  )
}

export default Info