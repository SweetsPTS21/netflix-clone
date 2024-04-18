import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react'
import { useAuthedContext } from './authedContext'
import Page403 from '../common/error/Page403'
import { useAppContext } from './appContext'
import { useQuery } from '@apollo/client'
import { GET_MOVIES } from '../api/graphql/movie'

const BrowseContext = createContext({})

export const useBrowseContext = () => useContext(BrowseContext)

const BrowseContextProvider = ({ children }) => {
    const { authedLogin } = useAuthedContext()
    const { changeRequesting } = useAppContext()

    useEffect(() => {
        if (authedLogin) {
            const delayFn = setTimeout(() => {
                changeRequesting(false)
            }, 1000)

            return () => {
                clearTimeout(delayFn)
            }
        }
    }, [])

    const {
        data: movieData,
        loading: movieLoading,
        error: movieError
    } = useQuery(GET_MOVIES)

    const contextValue = useMemo(() => {
        return {
            movieData,
            movieLoading,
            movieError
        }
    }, [movieData, movieLoading, movieError])

    return authedLogin ? (
        <BrowseContext.Provider value={contextValue}>
            {children}
        </BrowseContext.Provider>
    ) : (
        <Page403 />
    )
}

export default BrowseContextProvider
