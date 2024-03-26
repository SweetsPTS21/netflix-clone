import React from 'react'
import { Layout } from 'antd'
import Carousels from './carousel/Carousels'
import MovieModal from './modal'
import PropTypes from 'prop-types'

const BrowseContent = ({
    dataCarousels,
    openMovieDetails,
    setOpenMovieDetails
}) => {
    return (
        <Layout.Content className={'bg-[#141414] h-max'}>
            {dataCarousels.map((carousel, index) => (
                <div
                    key={carousel.id}
                    style={{
                        marginTop: '3vh'
                    }}
                >
                    <Carousels
                        title={carousel.title}
                        data={carousel.data}
                        setOpenModal={setOpenMovieDetails}
                    />
                </div>
            ))}
            <MovieModal
                openModal={openMovieDetails}
                setOpenModal={setOpenMovieDetails}
            />
        </Layout.Content>
    )
}

BrowseContent.propTypes = {
    dataCarousels: PropTypes.array,
    openMovieDetails: PropTypes.object,
    setOpenMovieDetails: PropTypes.func
}

export default BrowseContent
