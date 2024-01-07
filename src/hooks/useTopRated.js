import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRated } from '../utils/moviesSlice'
//Fetch data from TMDB API and update store
const useTopRated = () => {
    const dispatch  = useDispatch();
  const topRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRated(json.results))
  }

  useEffect(() => {
    topRatedMovies(); 
  }, []);
}

export default useTopRated;