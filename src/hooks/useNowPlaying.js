import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlaying } from '../utils/moviesSlice'
//Fetch data from TMDB API and update store
const useNowPlaying = () => {
    const dispatch  = useDispatch();
  const nowShowing = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addNowPlaying(json.results))
  }

  useEffect(() => {
    nowShowing(); 
  }, []);
}

export default useNowPlaying;