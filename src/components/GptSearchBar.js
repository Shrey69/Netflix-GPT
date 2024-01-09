import React, { useRef } from 'react'
import lang from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import {addGptMovieResult} from '../utils/gptSlice'


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null);
const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
     movie +
      "&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json = await data.json();
    return json.results;
}

    const handleGptSearchClick = async() => {

        console.log(searchText.current.value);

        const gptQuery = "Act as a Movie Recommendation System and suggest some for the query" +
         searchText.current.value +
          ".only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Past Lives, Poor Things, Oppenheimer, Barbie, All of us Strangers.";
       
          const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          console.log(gptResults.choices?.[0]?.message?.content);
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

          const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

          const tmdbResults = await Promise.all(promiseArray);
          dispatch(addGptMovieResult({movieNames: gptMovies, movieResult : tmdbResults}))
          
    }
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form
       
         className='bg-black grid grid-cols-12 w-full md:w-1/2' onSubmit={(e)=>e.preventDefault()}>
            <input className='p-4 m-4 col-span-9' 
             ref={searchText}
             placeholder={lang[langKey].gptSearchPlaceholder} type='text' />

            <button className='bg-red-700 m-4 rounded-lg text-white py-2 px-4 col-span-3' onClick={handleGptSearchClick}>
                 {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar