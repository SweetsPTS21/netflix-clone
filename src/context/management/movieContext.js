import React, { createContext, useContext, useMemo, useState } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => {
    const context = useContext(MovieContext)

    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider')
    }

    return context
}

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    const contextValue = useMemo(() => {
        return { movies, setMovies }
    }, [movies])

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
