import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { PHOTO_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
        <div className='fixed -z-10'>
        <img 
        className='h-screen object-cover md:h-auto'
        src= {PHOTO_URL}
        alt='Logo'
        />
        </div>

        <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>
        
    </>
  )
}

export default GptSearch