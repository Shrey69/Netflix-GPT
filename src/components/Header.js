import React, { useEffect }  from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import { LOGO, USER_ICON } from '../utils/constants';

const Header = () => {
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  const unsubscribe  = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email: email, displayName:displayName}));
       navigate('/browse')
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
      }
    }); //unsubscribe when component unmounts
    return () => (unsubscribe)
  }, []); 

  return (
   <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
    <img
    className=' w-52   '
    src= {LOGO}
    alt='Logo' 
   />
  {user && <div className='flex p-2'>
    <img className='w-12 h-12'
    alt='userIcon'
     src= {USER_ICON}
    />
    <button 
    className='font-bold text-white'
    onClick={handleSignOut}
    >(Sign Out)</button>
   </div>}
   </div>
  )
}

export default Header