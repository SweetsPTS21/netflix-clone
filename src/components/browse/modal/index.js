import React, { useState } from 'react'
import { Button, Divider, Modal } from 'antd'
import MovieInfo from './info'
import Episodes from './episodes'
import About from './about'
import { CaretRightFilled } from '@ant-design/icons'
import ButtonIcon from '../../../custom/button/ButtonIcon'
import Suggest from './suggest'
import { useBrowseContext } from '../../../context/browseContext'
import YoutubeTrailer from '../../youtube/YoutubeTrailer'
import screenful from 'screenfull'

const MovieModal = () => {
    const {
        currentMovie,
        openModal,
        setOpenModal,
        setTrailerPlaying,
        trailerMuted,
        setTrailerMuted,
        setMoviePlaying,
        playerRef
    } = useBrowseContext()

    const toggleFullScreen = () => {
        const delayFn = setTimeout(() => {
            if (playerRef.current) {
                screenful.toggle(playerRef.current)
            }
        }, 500)

        return () => {
            clearTimeout(delayFn)
        }
    }

    return (
        <Modal
            open={openModal}
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
                        onClick={() => {
                            setTrailerPlaying(false)
                            setOpenModal(null)
                        }}
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
                    <div className={'w-full h-[32rem] rounded-lg bg-[#333]'}>
                        <YoutubeTrailer videoId={currentMovie?.trailer} />
                    </div>
                    <div className={'movie-actions'}>
                        <div className={'flex gap-4'}>
                            <Button
                                size={'large'}
                                className={'btn-browse-light rounded'}
                                onClick={() => {
                                    setOpenModal(null)
                                    setTrailerPlaying(false)
                                    setMoviePlaying(true)
                                    toggleFullScreen()
                                }}
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
                            {trailerMuted ? (
                                <ButtonIcon
                                    icon={'mute'}
                                    tooltip={'Mute'}
                                    onClick={() => setTrailerMuted(false)}
                                />
                            ) : (
                                <ButtonIcon
                                    icon={'sound'}
                                    tooltip={'Audio and Subtitles'}
                                    onClick={() => setTrailerMuted(true)}
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
