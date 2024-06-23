import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieForDisplay } from "../utils/movieSlice";
import { useNavigate } from "react-router-dom";

const useGetMovieDetailsHook = (id, mode, page) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user?.user);
    const FetchDetails = () => {
        if (user != null) {
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
                    dispatch(addMovieForDisplay(json));
                })
                .catch(error => console.error('Error fetching movie details:', error));
        }
        else {
            navigate('/browse')
        }
    };

    useEffect(() => {
        FetchDetails();
    }, [id, mode]);
};

export default useGetMovieDetailsHook;
