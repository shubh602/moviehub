import React, { useRef, useState } from 'react'
import { validate } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { adduser } from '../utils/userSlice'
import Header from './Header'
import { SignIn_Bg } from '../utils/Constant'



const SignIn = () => {

    const [signin ,setsignin]=useState(true)
    const [showPass,setShowPass]=useState(true)
    const [message,setMessage]=useState(null)


    const dispatch=useDispatch()

    
    const Name=useRef(null)
    const Email=useRef(null)
    const Password=useRef(null)
    
 
    function formValidation(){
        const check= signin ? validate(Email.current.value,Password.current.value) : validate(Email.current.value,Password.current.value,Name.current.value) 
        setMessage(check) 
        
        if(check !== null) return
        if(!signin){             
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
                        navigation('browser')
                      }).catch((error) => {
                        setMessage(error.message)
                      })
                })
                .catch((error) => {
                  setMessage(error.message)                 
                });
            }
        else{
          signInWithEmailAndPassword(auth, Email.current.value,Password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage(errorMessage)

            });
            }   
      }


   


  return (
    <div className="relative">
         <img className='w-full h-dvh absolute -z-50'
         src={SignIn_Bg} alt="" />


         <Header />


          <form onSubmit={(e)=>e.preventDefault()} className="bg-black/75 mt-24 py-10 px-6 w-fit mx-auto rounded-2xl flex flex-col space-y-5 items-center text-white">
                      <h1 className='text-5xl font-bold pb-8'>Sign {signin?"In":"Up"}</h1>

                      {!signin &&<input type="text" ref={Name} placeholder='Name' className='w-96 h-10 bg-gray-700 px-2 rounded-lg' name="" id="" />}

                      <input type="text" placeholder='Email' ref={Email} className='w-96 h-10 bg-gray-700 px-2 rounded-lg' name="" id="" />
                      
                      <span className='flex flex-col space-y-4'>
                      <input type={showPass?"text":"password"} placeholder='Password' ref={Password} className='w-96 h-10 bg-gray-700 px-2 rounded-lg' name="" id="" />
                      <input type="checkbox" onChange={()=>setShowPass(!showPass)} className='cursor-pointer mr-auto ml-2'  name="" id="" />
                      </span>

                      <span className='text-red-500 mr-auto font-semibold'>{message}</span>

                      <button className='bg-orange-600 hover:bg-orange-700 w-full text-xl py-2 font-semibold rounded-md cursor-pointer'
                       onClick={formValidation}
                      >Sign {signin?"In":"Up"}</button>

                      <span className='mr-auto font-semibold cursor-pointer hover:underline'
                      onClick={()=>setsignin(!signin)}>
                        Create new Account.
                     </span>
          </form>          

    </div>
  )
}

export default SignIn