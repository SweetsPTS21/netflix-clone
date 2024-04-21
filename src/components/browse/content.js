import React from 'react'
import { Layout } from 'antd'
import Carousels from './carousel/Carousels'
import MovieModal from './modal'
import PropTypes from 'prop-types'
import { useBrowseContext } from '../../context/browseContext'
import MoviePlayer from '../player/MoviePlayer'

const BrowseContent = () => {
    const { movieByCategory, moviePlaying } = useBrowseContext()

    return (
        <Layout.Content className={'bg-[#141414] h-max'}>
            {movieByCategory?.map(
                (carousel, index) =>
                    carousel?.movies?.length > 5 && (
                        <div
                            key={carousel?.category}
                            style={{
                                marginTop: '3vh'
                            }}
                        >
                            <Carousels
                                title={carousel?.category}
                                data={carousel?.movies}
                            />
                        </div>
                    )
            )}
            <MovieModal />

            {moviePlaying && <MoviePlayer />}
        </Layout.Content>
    )
}

BrowseContent.propTypes = {
    dataCarousels: PropTypes.array,
    openMovieDetails: PropTypes.object,
    setOpenMovieDetails: PropTypes.func
}

export default BrowseContent
