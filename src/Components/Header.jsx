import { useDispatch, useSelector } from 'react-redux'
import { removeuser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'

const Header = () => {

const navigation=useNavigate()

    const user=useSelector((store)=>store.user)
    console.log(user);
        



    const handlelogin=()=>{
    signOut(auth).then(() => {
          navigation('/')
        }).catch((error) => {
          navigation('/') 
        })
    }    

  return (
    <div className='bg-black/70 text-white flex items-center justify-between p-4'>
        
          <span>Movie_Hub</span>
          <span className='flex items-center'>
                <button className='bg-gray-400 py-2 px-4 rounded-sm font-bold cursor-pointer'
                onClick={()=>{handlelogin()}}
                >SignIn</button>
          </span>

    </div>
  )
}

export default Header