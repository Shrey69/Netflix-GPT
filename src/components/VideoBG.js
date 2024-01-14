import React from 'react'
import useTrailer from '../hooks/useTrailer';
import { useSelector } from 'react-redux';

const VideoBG = ({movieId}) => {

  useTrailer(movieId);
  const trailerVideo= useSelector((store) => store.movies?.trailerVideo)



  return (
    <div>
      <iframe 
      className='w-screen aspect-video'
      //'https://youtu.be/'
      src="https://www.youtube.com/embed/OAZWXUkrjPc?si=qsI-yO4uPWf1w8Kb?&autoplay=1&mute=1"
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encryptd-media; gyroscope; picture-in-picture; web-share" 
     >
      </iframe>

    </div>
  )
}

export default VideoBG