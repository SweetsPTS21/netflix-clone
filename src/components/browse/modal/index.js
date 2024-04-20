import React, { useState } from 'react'
import { Button, Divider, Modal } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import MovieInfo from './info'
import Episodes from './episodes'
import About from './about'
import { CaretRightFilled } from '@ant-design/icons'
import ButtonIcon from '../../../custom/button/ButtonIcon'
import Suggest from './suggest'
import { useBrowseContext } from '../../../context/browseContext'

const MovieModal = () => {
    const [mute, setMute] = useState(false)
    const { currentMovie, openModal, setOpenModal } = useBrowseContext()

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
                        src={
                            currentMovie?.images?.length > 0
                                ? currentMovie?.images[0]
                                : witcher
                        }
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
                                            fontSize: '2rem'
                                        }}
                                    />
                                    <p className={'text-xl font-semibold'}>
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
                    <MovieInfo movie={currentMovie} />

                    {currentMovie?.type === 'series' && (
                        <Episodes movie={currentMovie} />
                    )}

                    <Suggest />
                    <Divider className={'bg-[#d2d2d2]'} />
                    <About movie={currentMovie} />
                </div>
            </div>
        </Modal>
    )
}

export default MovieModal
