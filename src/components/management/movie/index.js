import React from 'react'
import MovieProvider from '../../../context/management/movieContext'

const MovieManagement = () => {
    return (
        <MovieProvider>
            <div>Movie Management</div>
        </MovieProvider>
    )
}

export default MovieManagement
