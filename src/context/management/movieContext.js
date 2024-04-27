import React, { createContext, useContext, useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_MOVIES } from '../../api/graphql/movie'

const MovieContext = createContext()

export const useMovieContext = () => {
    const context = useContext(MovieContext)

    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider')
    }

    return context
}

const MovieProvider = ({ children }) => {
    const { data, loading, error, refetch } = useQuery(GET_MOVIES)
    const [currentMovie, setCurrentMovie] = useState({})
    const [openEditModal, setOpenEditModal] = useState(false)

    const changeEditModalState = (value) => {
        setCurrentMovie(value)
        setOpenEditModal(!openEditModal)
    }

    const contextValue = useMemo(() => {
        return {
            allMovies: data?.getAllMovie,
            loadingMovie: loading,
            refetchMovies: refetch,
            openEditModal,
            changeEditModalState,
            currentMovie
        }
    }, [data, loading, refetch, openEditModal, currentMovie])

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
