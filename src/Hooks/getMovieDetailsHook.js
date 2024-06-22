import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addMovieForDisplay } from "../utils/movieSlice";

const useGetMovieDetailsHook = (id, mode) => {
    const dispatch = useDispatch();

    const fetchDetails = () => {
        let endpoint = '';

        if (mode === 'movie') {
            endpoint = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        } else if (mode === 'tv') {
            endpoint = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
        } else {
            endpoint = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        }

        fetch(endpoint, API_OPTIONS)
            .then(data => data.json())
            .then(json => {
                dispatch(addMovieForDisplay(json)); // Assuming the entire json is the movie details
            })
            .catch(error => console.error('Error fetching movie details:', error));
    };

    useEffect(() => {
        fetchDetails();
    }, [id, mode]); // Add id and mode as dependencies
};

export default useGetMovieDetailsHook;
