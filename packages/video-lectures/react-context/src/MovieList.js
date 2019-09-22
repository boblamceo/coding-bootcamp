import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const [ movies, setMovies ] = useContext(MovieContext);
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Movie name={movie.name} price={movie.price} key={movie.id}>
                        {movie.name}
                    </Movie>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
