import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [ movies, setMovie ] = useContext(MovieContext);
    return (
        <div>
            <h3 href='#' className='brand-logo'>
                Bob Lam
            </h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
};

export default Nav;
