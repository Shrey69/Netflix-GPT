import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/Validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(); 
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState(null);
    const toSignUp = () => {
        setIsSignInForm(!isSignInForm) 
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
       const messasge =  validate(email.current.value, password.current.value)
       setErrorMessage(messasge)
       if(messasge) return;

       if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
       }
       else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
       }
    }
  return (
    <div>
        <Header/>
    <div className='absolute'>
    <img className='h-screen object-cover md:h-auto' src= {PHOTO_URL}
     alt='Logo'
    />
    </div>
    <form 
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black w-screen md:w-3/12 m-36 mx-auto left-0 right-0 text-white bg-opacity-90'>
        <h1 className='font-bold text-3xl py-4 '>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input
        type='text' placeholder='Name'
        className='p-4 my-2 w-full bg-gray-800 rounded-lg' />}

        <input
        ref={email}
         type='text' placeholder='E-mail address'
         className='p-4 my-2 w-full bg-gray-800 rounded-lg' />

        <input 
        ref={password }
        type='password' placeholder='Password' 
        className='p-4 my-2 w-full bg-gray-800 rounded-lg'/>

        <p className='text-red-500 font-bold text-lg'>
            {errorMessage}
        </p>

        <button
         className='p-4 my-6 w-full bg-red-600 rounded-lg'  onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-6 cursor-pointer' 
        onClick={toSignUp}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now."}
        </p>

    </form>
    </div>
  )
}

export default Login