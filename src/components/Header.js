import React, { useEffect }  from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import { LANGUAGES, LOGO, USER_ICON } from '../utils/constants';
import { toggleGptSerachView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
 

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  const handleToggleGptSearch = () => {
    dispatch(toggleGptSerachView());
  }
const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value))
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
  {user && <div className='flex p-2 '>
    {showGptSearch && <select className='p-2 m-4 font-semibold bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
      {LANGUAGES.map((lang) => (
           <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
      ))}
     
      
    </select>}
    <button
    onClick={handleToggleGptSearch}
    className='py-2 px-4 my-4 font-semibold mx-4 bg-purple-800 text-white rounded-lg'>
      {showGptSearch ? "Home Page":"GPT Search"}</button>
    <img className='w-14 h-14'
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