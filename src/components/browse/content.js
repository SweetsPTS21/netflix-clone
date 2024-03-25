import React, { useState } from 'react'
import { Layout, Modal } from 'antd'
import Carousels from './carousel/Carousels'
import { carousels } from '../../resource/browse/carousel'
import MovieModal from './modal'

const BrowseContent = () => {
    const [openMovieDetails, setOpenMovieDetails] = useState(null)

    return (
        <Layout.Content className={'bg-[#141414] h-max'}>
            {carousels.map((carousel, index) => (
                <div
                    key={index}
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

export default BrowseContent
