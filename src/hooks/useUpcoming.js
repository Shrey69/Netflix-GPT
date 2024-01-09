import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {  addUpcoming } from '../utils/moviesSlice'
//Fetch data from TMDB API and update store
const useUpcoming = () => {
    const dispatch  = useDispatch();
    const upcoming = useSelector((store) =>store.movies.upcomingMovies)
  const upcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addUpcoming(json.results))
  }

  useEffect(() => {
   !upcoming && upcomingMovies(); 
  }, []);
}

export default useUpcoming;