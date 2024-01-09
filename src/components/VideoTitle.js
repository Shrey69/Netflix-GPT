import React from 'react'

const VideoTitle = ({title, overview}) => { 
  return (
    <div className='w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl pt-8 md:pt-0 my-4 md:my-0 font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4 font-semibold'>{overview}</p>
        <div className='my-4 md:my-0'>
            <button className='font-bold rounded-lg bg-white text-black  py-1 md:py-4 px-3 md:px-12 hover:bg-opacity-80'> ▶Play</button>
            <button className='hidden md:inline-block font-bold rounded-lg mx-2 bg-gray-500 text-white p-4 px-12 bg-opacity-50 hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle