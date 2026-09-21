import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

const navigation=useNavigate()
const dispatch=useDispatch()

const user=useSelector((store)=>store.user)
        
console.log(user);



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


    const handlelogOut=()=>{
    signOut(auth).then(() => {
        }).catch((error) => {  
          navigation('/error')    
        })
    }    

  return (
    <div className='z-50 bg-gradient-to-b from-black/90 to-transparent fixed w-full text-white flex items-center justify-between p-4'>
        
          <span className='text-orange-700 text-2xl font-bold'>Movie_Hub</span>

          { user &&
            <span className='flex items-center space-x-4'>
                {/* <button 
                className='bg-orange-700 text-white text-xl py-1.5 px-2 rounded-full hover:opacity-80 font-bold cursor-pointer'
                title={user.displayName}
                onClick={()=>{handlelogOut()}}
                ><FontAwesomeIcon icon={faUser} /></button> */}

                <button><FontAwesomeIcon className='text-3xl cursor-pointer hover:opacity-70' icon={faBars} /></button>
            </span>
          }
          

    </div>
  )
}

export default Header