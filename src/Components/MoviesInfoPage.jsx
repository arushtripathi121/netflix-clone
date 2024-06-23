import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import GetMovieDetailsHook from '../Hooks/getMovieDetailsHook';
import { useSelector } from 'react-redux';
import GetMovieDisplayVideo from '../Hooks/GetMovieDisplayVideo';
import { IoCloseSharp } from 'react-icons/io5';
import { BiPlay } from 'react-icons/bi';
import ErrorPage from './ErrorPage';

const MoviesInfoPage = () => {
    const { id, mode } = useParams();

    GetMovieDetailsHook(id, mode);
    const video = GetMovieDisplayVideo(id, mode);
    const results = useSelector((store) => store.movies?.movieForDisplay);
    const user = useSelector(store => store.user);

    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            const videoElement = videoRef.current;
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.mozRequestFullScreen) { // Firefox
                videoElement.mozRequestFullScreen();
            } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { // IE/Edge
                videoElement.msRequestFullscreen();
            }
        }
    };

    useEffect(() => {
        const fullscreenChangeHandler = () => {
            setIsFullscreen(!!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement);
        };

        document.addEventListener('fullscreenchange', fullscreenChangeHandler);
        document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
        document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
        document.addEventListener('MSFullscreenChange', fullscreenChangeHandler);

        return () => {
            document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
            document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler);
            document.removeEventListener('mozfullscreenchange', fullscreenChangeHandler);
            document.removeEventListener('MSFullscreenChange', fullscreenChangeHandler);
        };
    }, []);

    if (!results || !video) return null;
    if (user == null) return;

    const { backdrop_path, poster_path, original_title, vote_average, overview, origin_country, original_language, adult, runtime, release_date, tagline } = results;
    const { key } = video;
    console.log(adult);

    return (
        <div>
            {!user ?
                <div className='browse aspect-video px-4 py-4 md:px-20 md:py-10'>
                    <Link to={'/browse'}>
                        <p className='mb-10'>
                            <IoCloseSharp className='text-white w-10 h-auto' />
                        </p>
                    </Link>
                    <div className='border border-gray-500 text-white flex flex-col md:flex-row gap-6 p-5 rounded-lg'>
                        <div className='flex-shrink-0'>
                            <img className='w-full md:w-[200px] lg:w-[400px] xl:w-[450px] h-auto object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Movie Poster" />
                        </div>
                        <div className='flex flex-col items-start text-white space-y-5 w-full'>
                            <p className='text-3xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold'>{original_title}</p>
                            <p className='text-xl md:text-2xl lg:text-3xl italic'>{tagline}</p>
                            <div className='text-lg md:text-xl lg:text-xl xl:text-xl'>
                                <p className='text-2xl md:text-1xl lg:text-2xl xl:text-3xl font-bold'>Overview</p>
                                <p>{overview}</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <p className={`px-3 py-1 rounded-full ${adult ? 'bg-red-600' : 'bg-green-600'}`}>{adult ? '18+' : '16+'}</p>
                                <p>Rating: <span className={`font-bold ${vote_average >= 8 ? 'text-green-400' : vote_average >= 5 ? 'text-yellow-400' : 'text-red-400'}`}>{vote_average}</span></p>
                                <p>Duration: {runtime} minutes</p>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <p>Country: {origin_country}</p>
                                <p>Language: {original_language}</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <p>Release Date: {release_date}</p>
                            </div>
                            <button className='px-5 py-3 bg-red-700 rounded-lg hover:bg-red-600 transition-colors' onClick={handlePlay}>
                                <p className='text-xl font-semibold flex flex-row items-center'><BiPlay className='w-10 h-auto' />Play</p>
                            </button>
                        </div>
                    </div>
                    <div style={{ display: isFullscreen ? 'block' : 'none' }}>
                        <iframe
                            ref={videoRef}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${key}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            : <ErrorPage/>}
        </div>
    );
};

export default MoviesInfoPage;
