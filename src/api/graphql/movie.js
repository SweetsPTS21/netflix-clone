import { gql } from '@apollo/client'

export const GET_MOVIES = gql`
    query GetAllMovies {
        getAllMovie {
            id
            title
            year
            rated
            released
            runtime
            genre
            director
            writer
            actors
            plot
            languages
            country
            awards
            poster
            metascore
            imdbRating
            imdbVotes
            type
            response
            images
        }
    }
`

export const GET_MOVIE_BY_CATEGORY = gql`
    query GetMovieByCategory {
        getMovieByCategory {
            category
            movies {
                id
                title
                year
                rated
                released
                runtime
                genre
                director
                writer
                actors
                plot
                languages
                country
                awards
                poster
                metascore
                imdbRating
                imdbVotes
                type
                response
                images
            }
        }
    }
`
