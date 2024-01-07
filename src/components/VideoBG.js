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
      src="https://www.youtube.com/embed/ns8weNznn1Y?si=xWEQSGvnmOjGtMoC?&autoplay=1&mute=1"
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encryptd-media; gyroscope; picture-in-picture; web-share" 
     >
      </iframe>

    </div>
  )
}

export default VideoBG