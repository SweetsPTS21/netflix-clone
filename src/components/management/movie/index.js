import React from 'react'
import MovieProvider from '../../../context/management/movieContext'
import MovieTable from './table'
import UpdateMovieModal from './modal'

const MovieManagement = () => {
    return (
        <MovieProvider>
            <MovieTable />
            <UpdateMovieModal />
        </MovieProvider>
    )
}

export default MovieManagement
