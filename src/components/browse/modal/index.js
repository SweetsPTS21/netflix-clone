import React, { useState } from 'react'
import { Button, Divider, Modal } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import MovieInfo from './info'
import Episodes from './episodes'
import PropTypes from 'prop-types'
import Index from './suggest'
import About from './about'
import { CaretRightFilled } from '@ant-design/icons'
import ButtonIcon from '../../../custom/button/ButtonIcon'
import Suggest from './suggest'

const MovieModal = ({ openModal, setOpenModal }) => {
    const [mute, setMute] = useState(false)

    return (
        <Modal
            open={openModal}
            onCancel={() => setOpenModal(null)}
            centered={true}
            width={850}
            style={{
                top: '2rem'
            }}
            zIndex={1100}
            footer={null}
            closeIcon={
                <div className={'absolute top-6 right-6'}>
                    <ButtonIcon
                        icon={'close'}
                        onClick={() => setOpenModal(null)}
                        style={{
                            width: '2rem',
                            height: '2rem'
                        }}
                        iconStyle={{
                            fontSize: '1rem'
                        }}
                    />
                </div>
            }
        >
            <div className={'flex flex-col'}>
                <div className={'flex gap-4 relative'}>
                    <img
                        src={witcher}
                        alt={'movie'}
                        className={'w-full h-[32rem] rounded-lg'}
                    />
                    <div className={'movie-actions'}>
                        <div className={'flex gap-4'}>
                            <Button
                                size={'large'}
                                className={'btn-browse-light rounded'}
                            >
                                <div
                                    className={
                                        'flex items-center justify-center gap-2'
                                    }
                                >
                                    <CaretRightFilled
                                        style={{
                                            fontSize: '1.5rem'
                                        }}
                                    />
                                    <p className={'text-lg font-semibold'}>
                                        Play
                                    </p>
                                </div>
                            </Button>
                            <ButtonIcon
                                icon={'plus'}
                                tooltip={'Add to My List'}
                            />
                            <ButtonIcon icon={'like'} tooltip={'I Like It'} />
                        </div>
                        <div>
                            {mute ? (
                                <ButtonIcon
                                    icon={'mute'}
                                    tooltip={'Mute'}
                                    onClick={() => setMute(!mute)}
                                />
                            ) : (
                                <ButtonIcon
                                    icon={'sound'}
                                    tooltip={'Audio and Subtitles'}
                                    onClick={() => setMute(!mute)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={'px-12'}>
                    <MovieInfo />
                    <Episodes />
                    <Suggest />
                    <Divider className={'bg-[#d2d2d2]'} />
                    <About />
                </div>
            </div>
        </Modal>
    )
}

MovieModal.propTypes = {
    openModal: PropTypes.object,
    setOpenModal: PropTypes.func
}

MovieModal.defaultProps = {
    openModal: false
}

export default MovieModal
