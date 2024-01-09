import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopular } from '../utils/moviesSlice'
//Fetch data from TMDB API and update store
const usePopular = () => {
    const dispatch  = useDispatch();
    const popularlyMovies = useSelector((store) =>store.movies.popularMovies)
  const popularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopular(json.results))
  }

  useEffect(() => {
   !popularlyMovies && popularMovies(); 
  }, []);
}

export default usePopular;