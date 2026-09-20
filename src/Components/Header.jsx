import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth/cordova'

const Header = () => {

const navigation=useNavigate()
const dispatch=useDispatch()

const user=useSelector((store)=>store.user)
        


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
        
          <span className='text-orange-600 text-2xl font-bold'>Movie_Hub</span>

          { user &&
            <span className='flex items-center'>
                <button className='bg-orange-600 text-white py-1.5 px-3 rounded-lg hover:opacity-80 font-bold cursor-pointer'
                onClick={()=>{handlelogOut()}}
                >SignIn</button>
            </span>
          }
          

    </div>
  )
}

export default Header