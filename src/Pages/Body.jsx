import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from '../Components/SignIn'
import Browser from '../Components/Browser'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'

const Body = () => {

  const dispatch=useDispatch()

useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
              if (user) {                           
                const {uid,displayName,email} = user
                
                dispatch(adduser({
                      uid:uid,
                      displayName:displayName,
                      email:email
                }))

              }else{
                 dispatch(removeuser())
              }
      })
},[]) 




   const appRouter=createBrowserRouter([
     {
       path:"/",
       element:<SignIn />
     },{
      path:"/browser",
      element:<Browser />
     }
   ])

  return <RouterProvider router={appRouter} />
}

export default Body