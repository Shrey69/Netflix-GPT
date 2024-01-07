import React from 'react'

const VideoTitle = ({title, overview}) => { 
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 font-semibold'>{overview}</p>
        <div>
            <button className='font-bold rounded-lg bg-white text-black p-4 px-12 hover:bg-opacity-80'> ▶️Play</button>
            <button className='font-bold rounded-lg mx-2 bg-gray-500 text-white p-4 px-12 bg-opacity-50 hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle