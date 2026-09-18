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
console.log(user);
        


   useEffect(()=>{
         onAuthStateChanged(auth, (user) => {
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
   },[]) 


    const handlelogOut=()=>{
    signOut(auth).then(() => {
        }).catch((error) => {  
          navigation('/error')    
        })
    }    

  return (
    <div className='bg-black/70 text-white flex items-center justify-between p-4'>
        
          <span>Movie_Hub</span>

          { user &&
            <span className='flex items-center'>
                <button className='bg-gray-400 py-2 px-4 rounded-sm font-bold cursor-pointer'
                onClick={()=>{handlelogOut()}}
                >SignIn</button>
            </span>
          }
          

    </div>
  )
}

export default Header