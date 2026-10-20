import { useEffect, useRef, useState } from 'react'
import { validate } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova'
import { auth } from '../utils/firebase'
import { updateProfile } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../utils/userSlice'
import Header from '../Components/Header'
import { SignIn_Bg } from '../utils/Constant'
import { useNavigate } from 'react-router-dom'



const SignIn = () => {

    const [signin ,setsignin]=useState(true)
    const [showPass,setShowPass]=useState(true)
    const [message,setMessage]=useState(null)
    const navigation=useNavigate()
    const UserDetail=useSelector(store=>store.user)


    const dispatch=useDispatch()

    
    const Name=useRef(null)
    const Email=useRef(null)
    const Password=useRef(null)

    useEffect(()=>{
       UserDetail && navigation('/browser')
    },[UserDetail])
    
 
    function formValidation(){
        const check= signin ? validate(Email.current.value,Password.current.value) : validate(Email.current.value,Password.current.value,Name.current.value) 
        setMessage(check) 
        
        if(check !== null) return
        if(!signin){  
              console.log("sign in");
                         
              createUserWithEmailAndPassword(auth, Email.current.value,Password.current.value,Name.current.value) 
                .then((userCredential) => {
                  const user = userCredential.user;
                      updateProfile(auth.currentUser, {
                        displayName:Name.current.value , 
                        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXPHab3JP_fA8xYWGF7sBWrcsiinP4hCA6Nj1auUxLwHZIc4BDcZFBHs&s=10"
                      }).then(() => {
                                      const {uid,displayName,email} =auth.currentUser;             
                                      dispatch(adduser({
                                              uid:uid,
                                              displayName:displayName,
                                              email:email
                                      }))
                        navigation('/browser')
                      }).catch((error) => {
                        console.log("sign UP 1",error);
                        setMessage(error.message)
                      })
                })
                .catch((error) => {
                  console.log("sign UP 2",error);
                  setMessage(error.message)                 
                });
            }
        else{
              console.log("sign up");

          signInWithEmailAndPassword(auth, Email.current.value,Password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              navigation('/browser')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("sign UP",error);
              setMessage(errorMessage)
            });
            }   
      }


   useEffect(()=>{
    const clearMessage=message && setTimeout(()=>{
         setMessage(null)
    },3000)

    return()=>{
      clearTimeout(clearMessage);
    }
   },[message])


  return (
    <div className="relative flex min-h-dvh w-full justify-center overflow-hidden bg-black px-4 pb-10 pt-24 sm:items-center sm:py-24">
         <img className='fixed inset-0 -z-10 h-full w-full object-cover object-center'
         src={SignIn_Bg} alt="" />


         <Header />


          <form onSubmit={(e)=>e.preventDefault()} className="relative mt-8 flex w-full max-w-md flex-col items-center space-y-5 rounded-2xl border border-white/10 bg-black/80 px-5 py-8 text-white shadow-2xl shadow-black/50 backdrop-blur-xl sm:mt-0 sm:px-8 sm:py-10">
                      <h1 className='pb-3 text-4xl font-bold tracking-tight sm:pb-5 sm:text-5xl'>Sign {signin?"In":"Up"}</h1>

                      {!signin &&<input type="text" ref={Name} placeholder='Name' className='h-12 w-full rounded-lg border border-white/10 bg-zinc-800 px-4 text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30' name="" id="" />}
                      <span className={`${signin?"block":"hidden"} mr-auto text-sm text-white/60`}>eg : Demo@gmail.com</span>
                      <input type="text" placeholder='Enter Valid Email' ref={Email} className='h-12 w-full rounded-lg border border-white/10 bg-zinc-800 px-4 text-white outline-none transition placeholder:text-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30' name="" id="" />
                      
                      <span className='flex w-full flex-col gap-3'>
                      <span className={`${signin?"block":"hidden"} mr-auto text-sm text-white/60`}>eg : Demo@111</span>
                      <input type={showPass?"text":"password"} placeholder='Enter Valid Password' ref={Password} className='h-12 w-full rounded-lg border border-white/10 bg-zinc-800 px-4 text-white outline-none transition placeholder:text-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30' name="" id="" />
                      <input type="checkbox" onChange={()=>setShowPass(!showPass)} className='ml-1 size-4 cursor-pointer accent-orange-500'  name="" id="" />
                      </span>

                      <span className='mr-auto max-w-full break-words text-sm font-semibold text-red-400'>{message}</span>

                      <button className='w-full rounded-lg bg-orange-600 py-3 text-lg font-semibold text-white shadow-lg shadow-orange-950/30 transition-colors hover:bg-orange-500 cursor-pointer'
                       onClick={formValidation}
                      >Sign {signin?"In":"Up"}</button>

                      <span className='mr-auto cursor-pointer text-sm font-semibold text-white/75 transition-colors hover:text-orange-300 hover:underline'
                      onClick={()=>setsignin(!signin)}>
                        Create new Account.
                     </span>
          </form>          

    </div>
  )
}

export default SignIn