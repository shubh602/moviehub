import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { updatelang } from '../utils/configSlice'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faRightFromBracket , faXmark, faL, faSearch} from '@fortawesome/free-solid-svg-icons'
import { chooseLang } from '../utils/Constant'
import { langConstant } from '../utils/langConstant'

const Header = () => {

const [flag,setFlag]=useState(false)
const navigation=useNavigate()
const dispatch=useDispatch()
const search=useRef()

const user=useSelector((store)=>store.user)
const lang=useSelector((store)=>store.config.lang)
const playlist=useSelector(store=>store.playlist.list)

        

   useEffect(()=>{
      const unsubs= onAuthStateChanged(auth, (user) => {
                 if (user) {                           
                   const {uid,displayName,email} = user                  
                   dispatch(adduser({
                         uid:uid,
                         displayName:displayName,
                         email:email
                    }))
                    // navigation('/browser')

   
                 }else{
                    dispatch(removeuser())
                    navigation('/')
                 }
         })
    return ()=>unsubs()
   },[]) 

   const handleSearch=()=>{
       const searchInput=search.current.value;
       navigation(`/browser/search/${searchInput}`)
       
   }

   const handlelang=(e)=>{
      dispatch(updatelang(e.target.value))
   }

    const handlelogOut=()=>{
    signOut(auth).then(() => {
          navigation('/')
        }).catch((error) => {  
          navigation('/error')    
        })
    }    

  return (<>
    

     <div className={`${flag?"block":"hidden"} fixed right-3 top-20 z-40 flex max-h-[calc(100dvh-6rem)] w-[min(22rem,calc(100vw-1.5rem))] flex-col gap-4 overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950/95 p-5 text-base font-semibold shadow-2xl shadow-black/50 backdrop-blur-xl sm:right-5 sm:gap-5 sm:p-6 sm:text-lg`}>
                    
                    <span className='flex items-center gap-4 border-b border-white/10 pb-4'>
                          <button 
                                className='bg-orange-600 text-white text-lg size-10 rounded-full hover:bg-orange-500 font-bold cursor-pointer'
                                title={user && user.displayName}
                               >
                                <FontAwesomeIcon icon={faUser} />
                          </button>                       
                        <span className='flex min-w-0 flex-col gap-1 text-xs text-white/70'>
                               <span>{user && user.displayName}</span>
                               <span>{user && user.email}</span>
                        </span>
                    </span> 

                  
                          
                          <select value={lang} onChange={handlelang}
                                  className='relative w-full text-sm text-white bg-zinc-800 border border-white/10 px-4 py-2.5 rounded-lg text-start focus:outline-none focus:ring-2 focus:ring-orange-500' name="" id="">
                                   
                                    { chooseLang.map(langselect => <option key={langselect.val}  value={langselect.val}>{langselect.lang}</option> )}
                                   
                          </select>
                     

                    <Link to="/browser"><span className='block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-orange-400 cursor-pointer transition-colors'>{langConstant[lang].home}</span></Link>
                    <Link to="/browser/about"><span className='block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-orange-400 cursor-pointer transition-colors'>{langConstant[lang].about}</span></Link>
                    <Link to="/browser/contact"><span className='block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-orange-400 cursor-pointer transition-colors'>{langConstant[lang].contact}</span></Link>
                    <Link to="/browser/playlist"><span className='block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-orange-400 cursor-pointer transition-colors'>
                           {langConstant[lang].playlist} <span className='text-lg'>({playlist.length})</span> 
                    </span></Link>

                     

                    <span className='flex items-center justify-between rounded-lg px-3 py-2 cursor-pointer hover:bg-white/5'
                          onClick={()=>{handlelogOut()}} >
                        <span className='hover:text-orange-500'>{langConstant[lang].logout}</span>
                        <FontAwesomeIcon 
                           className='font-bold text-orange-500 hover:opacity-60'
                           
                           icon={faRightFromBracket} />
                    </span>         
     </div>    
   

    <div className='fixed inset-x-0 top-0 z-20 flex w-full items-center justify-between gap-3 bg-gradient-to-b from-black/95 via-black/70 to-transparent px-4 py-3 text-white backdrop-blur-sm sm:px-6 sm:py-4'>
         
         <Link to="/browser">
          <span className='text-lg font-extrabold tracking-tight text-orange-500 cursor-pointer sm:text-xl lg:text-2xl'>Movie_Hub</span>
          </Link>

          { user &&
            <span className='flex min-w-0 items-center gap-2 sm:gap-3'>
               <span className='text-white font-semibold'>
                
                 <input 
                     placeholder={langConstant[lang].search}
                     ref={search}
                     className='h-10 w-32 rounded-full border border-white/20 bg-black/40 pl-4 pr-10 text-sm text-white outline-none backdrop-blur-xl placeholder:text-white/60 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30 sm:w-48 md:w-64 lg:w-80'
                     type="text" name="" id="" />
                 <button onClick={handleSearch}>
                  <FontAwesomeIcon className='relative z-10 -ml-8 cursor-pointer text-base font-bold text-white/80 transition-colors hover:text-orange-400' icon={faSearch} />
                 </button>

               </span>

     

               

                <button> 
                  <FontAwesomeIcon 
                          onClick={()=>setFlag(!flag)}
                          className='rounded-lg p-2 text-2xl cursor-pointer transition-colors hover:bg-white/10 hover:text-orange-400 sm:text-3xl'
                          icon={!flag?faBars:faXmark} />
                </button>

            </span>
          }
          


    </div>

  </>)
}

export default Header