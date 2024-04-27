import { Card, Flex } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../../../custom/button/ButtonIcon'
import { useBrowseContext } from '../../../context/browseContext'
import screenful from 'screenfull'

const CarouselPopover = ({ movie }) => {
    const {
        setCurrentMovie,
        setOpenModal,
        setTrailerPlaying,
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
        <div className={'movie-details'}>
            <Card bordered={false} className={'w-full h-full carousel-card'}>
                <Flex vertical className={'h-full w-full'}>
                    <img
                        src={
                            movie?.images?.length > 0
                                ? movie?.images[1]
                                : witcher
                        }
                        alt={movie?.title}
                        className={'h-[60%]'}
                        style={{
                            objectFit: 'cover',
                            borderTopLeftRadius: '6px',
                            borderTopRightRadius: '6px'
                        }}
                    />
                    <div
                        className={'p-4 text-white flex-1'}
                        style={{
                            borderBottomLeftRadius: '6px',
                            borderBottomRightRadius: '6px'
                        }}
                    >
                        <div className={'text-xl mb-2'}>{movie?.title}</div>
                        <div
                            className={'mb-2'}
                            style={{
                                display: 'flex',
                                fontSize: '1rem'
                            }}
                        >
                            <p>Comedy</p>
                            <p className={'mx-2'}>•</p>
                            <p>2021</p>
                            <p className={'mx-2'}>•</p>
                            <p>HD</p>
                        </div>
                        <Flex justify={'space-between'} key={movie?.id}>
                            <Flex gap={16} align={'center'}>
                                <ButtonIcon
                                    icon={'play'}
                                    onClick={() => {
                                        setMoviePlaying(true)
                                        toggleFullScreen()
                                    }}
                                />
                                <ButtonIcon
                                    icon={'plus'}
                                    tooltip={'Add to My List'}
                                    onClick={() => {}}
                                />
                                <ButtonIcon
                                    icon={'like'}
                                    tooltip={'I like this'}
                                    onClick={() => {}}
                                />
                            </Flex>
                            <div className={'text-white px-4'}>
                                <ButtonIcon
                                    icon={'down'}
                                    tooltip={'More Info'}
                                    onClick={() => {
                                        setCurrentMovie(movie)
                                        setOpenModal(true)
                                        setTrailerPlaying(true)
                                    }}
                                />
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </Card>
        </div>
    )
}

CarouselPopover.propTypes = {
    movie: PropTypes.object,
    setOpenModal: PropTypes.func
}

CarouselPopover.defaultProps = {
    movie: {
        id: 0,
        content: '',
        name: ''
    }
}

export default CarouselPopover
