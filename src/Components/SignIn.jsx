import React, { useState } from 'react'

const SignIn = () => {

    const [signin ,setsignin]=useState(true)

  return (
    <div className="relative">
         <img className='w-full h-dvh absolute -z-50'
         src="https://i.pinimg.com/1200x/3c/f6/56/3cf656908a2481110485bac3bf1297d9.jpg" alt="" />


         <div className="py-4 pl-6 pt-2 text-red-800 text-4xl font-bold bg-gradient-to-b from-black to-black/20 italic">Movies_<span className='text-red-400'>HUB</span></div>


          <div className="bg-black/85 mt-24 py-10 px-10 w-fit mx-auto rounded-xl flex flex-col space-y-8 items-center text-white">
                      <h1 className='text-5xl font-bold pb-8'>Sign {signin?"In":"Up"}</h1>

                      {!signin &&<input type="text" placeholder='Name' className='w-96 h-10 bg-gray-700 px-2 rounded-lg' name="" id="" />}

                      <input type="text" placeholder='Email' className='w-96 h-10 bg-gray-700 px-2 rounded-lg' name="" id="" />

                      <input type="text" placeholder='Password' className='w-96 h-10 bg-gray-700 px-2 rounded-lg' name="" id="" />
                      
                      <button className='bg-red-800 w-full text-xl py-2 font-semibold rounded-lg cursor-pointer'>Sign {signin?"In":"Up"}</button>

                      <span className='mr-auto font-semibold cursor-pointer hover:underline'
                      onClick={()=>setsignin(!signin)}>
                        Create new Account.
                     </span>
          </div>          

    </div>
  )
}

export default SignIn