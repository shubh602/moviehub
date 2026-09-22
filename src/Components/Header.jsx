import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { updatelang } from '../utils/configSlice'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faRightFromBracket , faXmark, faL, faSearch} from '@fortawesome/free-solid-svg-icons'
import { chooseLang } from '../utils/Constant'
import { langConstant } from '../utils/langConstant'

const Header = () => {

const [flag,setFlag]=useState(false)
const navigation=useNavigate()
const dispatch=useDispatch()

const user=useSelector((store)=>store.user)
const lang=useSelector((store)=>store.config.lang)

        

   useEffect(()=>{
      const unsubs= onAuthStateChanged(auth, (user) => {
                 if (user) {                           
                   const {uid,displayName,email} = user                  
                   dispatch(adduser({
                         uid:uid,
                         displayName:displayName,
                         email:email
                    }))
                    navigation('/browser')
   
                 }else{
                    dispatch(removeuser())
                    navigation('/')
                 }
         })
    return ()=>unsubs()
   },[]) 

   const handlelang=(e)=>{
      dispatch(updatelang(e.target.value))
   }

    const handlelogOut=()=>{
    signOut(auth).then(() => {
        }).catch((error) => {  
          navigation('/error')    
        })
    }    

  return (<>
    

     <div className={`${flag?"block":"hidden"} w-fit h-fit fixed mt-13 right-6 px-4 md:px-16 py-4 md:py-12 z-40 flex flex-col backdrop-blur-lg text-md md:text-3xl space-y-6 font-semibold rounded-xl`}>
                    
                    <span className='flex items-center space-x-4 md:pb-6'>                       
                          <button 
                                className='bg-orange-700 text-white text-xl py-1.5 px-2 rounded-full hover:opacity-80 font-bold cursor-pointer'
                                title={user && user.displayName}
                               >
                                <FontAwesomeIcon icon={faUser} />
                          </button>                       
                        <span className='flex flex-col text-xs space-y-1'>
                               <span>{user && user.displayName}</span>
                               <span>{user && user.email}</span>
                        </span>
                    </span> 

                  
                          
                          <select onChange={handlelang}
                                  className='relative text-sm text-white bg-gray-600 px-4 py-2 rounded-lg text-start' name="" id="">
                                   
                                    { chooseLang.map(lang => <option value={lang.val}>{lang.lang}</option> )}
                                   
                          </select>
                     

                    <span className='hover:text-orange-500 cursor-pointer'>{langConstant[lang].home}</span>
                    <span className='hover:text-orange-500 cursor-pointer'>{langConstant[lang].about}</span>
                    <span className='hover:text-orange-500 cursor-pointer'>{langConstant[lang].contact}</span>
                    <span className='hover:text-orange-500 cursor-pointer'>{langConstant[lang].playlist}</span>

                     

                    <span className='flex items-center space-x-2 cursor-pointer '
                          onClick={()=>{handlelogOut()}} >
                        <span className='hover:text-orange-500'>{langConstant[lang].logout}</span>
                        <FontAwesomeIcon 
                           className='font-bold text-orange-500 hover:opacity-60'
                           
                           icon={faRightFromBracket} />
                    </span>         
     </div>    
   

    <div className='fixed z-20 bg-gradient-to-b from-black/90 to-transparent w-full text-white flex items-center justify-between p-4'>
        
          <span className='text-orange-700 text-md lg:text-2xl font-bold'>Movie_Hub</span>

          { user &&
            <span className='flex items-center space-x-3'>             
               <span className='text-white font-semibold'>
                
                 <input 
                     placeholder={langConstant[lang].search}
                     className='w-32 md:w-80 h-8 rounded-2xl pl-6 backdrop-blur-3xl'
                     type="text" name="" id="" />
                 <button>
                  <FontAwesomeIcon className='relative z-10 cursor-pointer -ml-11 text-xl font-bold' icon={faSearch} />
                 </button>

               </span>

     

               

                <button> 
                  <FontAwesomeIcon 
                          onClick={()=>setFlag(!flag)}
                          className='text-3xl cursor-pointer hover:opacity-70' 
                          icon={!flag?faBars:faXmark} />
                </button>

            </span>
          }
          


    </div>

  </>)
}

export default Header