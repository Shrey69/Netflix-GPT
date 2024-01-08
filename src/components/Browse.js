import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();

  return (
    
    <div>
      <Header/>
      {showGptSearch ?  <GptSearch /> :
       <>
       <MainContainer />
      <SecondaryContainer />
      </>}
    </div>
  )
}

export default Browse