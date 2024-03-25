import React from 'react'
import { Col, Modal, Row } from 'antd'
import witcher from '../../../asset/img/witcher.jpg'
import MovieInfo from './info'
import Episodes from './episodes'

const MovieModal = ({ openModal, setOpenModal }) => {
    return (
        <Modal
            open={openModal}
            onCancel={() => setOpenModal(null)}
            centered={true}
            width={850}
            className={'movie-modal-root'}
            zIndex={1100}
        >
            <div className={'flex flex-col'}>
                <div className={'flex gap-4'}>
                    <img
                        src={witcher}
                        alt={'movie'}
                        className={'w-full h-[32rem] rounded-lg'}
                    />
                </div>
                <div className={'px-12'}>
                    <MovieInfo />
                    <Episodes />
                </div>
            </div>
        </Modal>
    )
}

export default MovieModal
