import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(); 
    const toSignUp = () => {
        setIsSignInForm(!isSignInForm) 
    }
  return (
    <div>
        <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
     alt='Logo'
    />
    </div>
    <form className='absolute p-12 bg-black w-3/12 m-36 mx-auto left-0 right-0 text-white bg-opacity-90'>
        <h1 className='font-bold text-3xl py-4 '>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input
        type='text' placeholder='Name'
        className='p-4 my-2 w-full bg-gray-800 rounded-lg' />}

        <input
         type='text' placeholder='E-mail or Phone number'
         className='p-4 my-2 w-full bg-gray-800 rounded-lg' />

        <input 
        type='password' placeholder='Password' 
        className='p-4 my-2 w-full bg-gray-800 rounded-lg'/>

        <button
         className='p-4 my-6 w-full bg-red-600 rounded-lg'>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-6 cursor-pointer' 
        onClick={toSignUp}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user, Sign In Now."}
        </p>

    </form>
    </div>
  )
}

export default Login