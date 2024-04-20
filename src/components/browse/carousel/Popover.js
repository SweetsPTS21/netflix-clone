import { Card } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../../../custom/button/ButtonIcon'
import { useBrowseContext } from '../../../context/browseContext'

const CarouselPopover = ({ movie }) => {
    const { setCurrentMovie, setOpenModal } = useBrowseContext()

    return (
        <div className={'w-[22rem] movie-details'}>
            <Card
                bordered={false}
                className={'w-full h-full rounded-lg carousel-card'}
                cover={
                    <img
                        src={
                            movie?.images?.length > 0
                                ? movie?.images[1]
                                : witcher
                        }
                        className={'w-full h-full'}
                        alt={movie?.title}
                    />
                }
                actions={[
                    <div
                        key={movie?.id}
                        className={'flex justify-between py-4'}
                    >
                        <div
                            className={
                                'flex items-center gap-4 text-white px-4'
                            }
                        >
                            <ButtonIcon icon={'play'} onClick={() => {}} />
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
                        </div>
                        <div className={'text-white px-4'}>
                            <ButtonIcon
                                icon={'down'}
                                tooltip={'More Info'}
                                onClick={() => {
                                    setCurrentMovie(movie)
                                    setOpenModal(true)
                                }}
                            />
                        </div>
                    </div>
                ]}
            >
                <Card.Meta
                    description={
                        <div className={'flex flex-col p-4 text-white'}>
                            <div className={'text-xl'}>{movie?.title}</div>
                            <div
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
                        </div>
                    }
                />
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
