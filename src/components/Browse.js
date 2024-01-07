import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();

  return (
    
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse