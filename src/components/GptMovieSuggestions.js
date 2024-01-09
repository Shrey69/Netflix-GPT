import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames, movieResult} = useSelector((store) => store.gpt)
  if(!movieNames) return null;
  return (
    <div className='bg-black bg-opacity-80'>
      <div>
        {movieNames.map((movieName, index) => (<MovieList key={movieName} title={movieName} movies={movieResult[index]}/>))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions