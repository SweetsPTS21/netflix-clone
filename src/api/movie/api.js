import { Netlfiz_axios } from '../../custom/axios'
const movieUrl = '/movies'

export const getMovies = () => {
    Netlfiz_axios.get(movieUrl)
        .then((res) => {
            return res.data || []
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getMovieById = (id) => {
    Netlfiz_axios.get(`${movieUrl}/${id}`)
        .then((res) => {
            return res.data || {}
        })
        .catch((err) => {
            console.error(err)
        })
}
