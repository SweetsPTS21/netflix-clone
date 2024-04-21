import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import { useAuthedContext } from './authedContext'
import Page403 from '../common/error/Page403'
import { useAppContext } from './appContext'
import { useQuery } from '@apollo/client'
import { GET_MOVIE_BY_CATEGORY } from '../api/graphql/movie'

const BrowseContext = createContext({})

export const useBrowseContext = () => useContext(BrowseContext)

const BrowseContextProvider = ({ children }) => {
    const { authedLogin } = useAuthedContext()
    const { isRequesting } = useAppContext()
    const { changeRequesting } = useAppContext()
    const {
        data: movieData,
        loading: movieLoading,
        error: movieError
    } = useQuery(GET_MOVIE_BY_CATEGORY)
    const [currentMovie, setCurrentMovie] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const [moviePlaying, setMoviePlaying] = useState(false)
    const [trailerPlaying, setTrailerPlaying] = useState(false)
    const [trailerMuted, setTrailerMuted] = useState(false)
    const playerRef = useRef(null)

    console.log('currentMovie', currentMovie)

    useEffect(() => {
        if (authedLogin) {
            const delayFn = setTimeout(() => {
                changeRequesting(false)
            }, 500)

            return () => {
                clearTimeout(delayFn)
            }
        }
    }, [authedLogin])

    useEffect(() => {
        if (movieLoading) {
            changeRequesting(true)
        }
    }, [movieLoading])

    const contextValue = useMemo(() => {
        return {
            movieByCategory: movieData?.getMovieByCategory,
            movieLoading,
            movieError,
            currentMovie,
            setCurrentMovie,
            openModal,
            setOpenModal,
            trailerPlaying,
            setTrailerPlaying,
            trailerMuted,
            setTrailerMuted,
            moviePlaying,
            setMoviePlaying,
            playerRef
        }
    }, [
        movieData,
        movieLoading,
        movieError,
        currentMovie,
        openModal,
        trailerPlaying,
        moviePlaying,
        trailerMuted,
        playerRef
    ])

    return (
        !isRequesting &&
        !movieLoading &&
        !movieError &&
        (authedLogin ? (
            <BrowseContext.Provider value={contextValue}>
                {children}
            </BrowseContext.Provider>
        ) : (
            <Page403 />
        ))
    )
}

export default BrowseContextProvider
