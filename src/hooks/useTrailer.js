import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useTrailer = (movieId) => {
    const dispatch = useDispatch();
  
  const movieVideo = async() => {
    
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId+"/videos?language=en-US", API_OPTIONS)
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer")
    const trailer = filterData.length ? filterData : json.results[0]
    dispatch(addTrailerVideo(trailer))
    
  }

  useEffect(()=> {
    movieVideo();
  }, []);
}
export default useTrailer;