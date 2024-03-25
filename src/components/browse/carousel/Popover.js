import { Card } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../../../custom/button/ButtonIcon'

const CarouselPopover = ({ movie, setOpenModal }) => {
    return (
        <div className={'w-[22rem] movie-details'}>
            <Card
                bordered={false}
                className={'w-full h-full rounded carousel-card'}
                cover={
                    <img
                        src={witcher}
                        className={'w-full h-full'}
                        alt={movie?.content}
                    />
                }
                actions={[
                    <div key={movie?.id} className={'flex justify-between'}>
                        <div
                            className={
                                'flex items-center gap-4 text-white px-4'
                            }
                        >
                            <ButtonIcon icon={'play'} onClick={() => {}} />
                            <ButtonIcon icon={'plus'} onClick={() => {}} />
                            <ButtonIcon icon={'like'} onClick={() => {}} />
                        </div>
                        <div className={'text-white px-4'}>
                            <ButtonIcon
                                icon={'down'}
                                onClick={() => {
                                    if (setOpenModal) {
                                        setOpenModal(true)
                                    }
                                }}
                            />
                        </div>
                    </div>
                ]}
            >
                <Card.Meta
                    description={
                        <div className={'flex flex-col p-4 text-white'}>
                            <div className={'text-xl'}>{movie?.name}</div>
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