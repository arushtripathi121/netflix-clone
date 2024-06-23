import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/Constants';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GetMovieslIstHook = (name) => {
    const [results, setResults] = useState([]);
    const user = useSelector(store => store.user?.user);
    const navigate = useNavigate()


    const fetchMovies = async (name) => {
        if (user != null) {
            const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter(movie => movie.media_type == 'tv' || movie.media_type == 'movie');
            setResults(filterData);
        }
            else{
                navigate('/error');
            }
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            fetchMovies(name)
        }, 3000)
        return () => clearTimeout(timer);
    }, [name]);

    return results;
}

export default GetMovieslIstHook;