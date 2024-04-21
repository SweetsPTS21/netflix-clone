import React from 'react'
import { Layout } from 'antd'
import Carousels from './carousel/Carousels'
import MovieModal from './modal'
import PropTypes from 'prop-types'
import { useBrowseContext } from '../../context/browseContext'

const BrowseContent = () => {
    const { moviesData } = useBrowseContext()

    return (
        <Layout.Content className={'bg-[#141414] h-max'}>
            {moviesData?.map(
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
        </Layout.Content>
    )
}

BrowseContent.propTypes = {
    dataCarousels: PropTypes.array,
    openMovieDetails: PropTypes.object,
    setOpenMovieDetails: PropTypes.func
}

export default BrowseContent
