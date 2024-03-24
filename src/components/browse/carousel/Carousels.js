import React, { createRef, useEffect, useState } from 'react'
import { Carousel } from 'antd'
import { forYou } from '../../../resource/browse/movie'
import PropTypes from 'prop-types'
import { RightOutlined } from '@ant-design/icons'
import { redirect } from 'react-router-dom'
import CarouselRow from './Row'
import Navigator from './Navigator'

const Carousels = ({ title, data }) => {
    const page = Math.ceil(data.length / 6)
    const carouselRef = createRef()
    const [showExplore, setShowExplore] = useState(null)

    useEffect(() => {
        if (showExplore === false) {
            setTimeout(() => {
                setShowExplore(null)
            }, 1000)
        }
    }, [showExplore])

    const switchStyle = () => {
        switch (showExplore) {
            case true:
                return { animation: 'move-right 0.5s forwards' }
            case false:
                return { animation: 'move-left 0.5s forwards' }
            default:
                return { animation: 'none' }
        }
    }

    const changeStyle = () => {
        switch (showExplore) {
            case true:
                return { transition: 'opacity 0.5s ease-in-out' }
            case false:
                return { visibility: 'hidden', opacity: 0 }
            default:
                return { visibility: 'hidden', opacity: 0 }
        }
    }

    return (
        <div className={'relative'}>
            <div className={'flex text-white items-center gap-2 h-9'}>
                <p className={'carousel-title'}>{title}</p>
                <div className={'relative h-full w-32 flex'}>
                    <div
                        className={'carousel-title-icon flex items-end mb-1'}
                        onClick={() => {
                            setShowExplore(!showExplore)
                            if (showExplore) {
                                redirect('/')
                            }
                        }}
                        style={switchStyle()}
                    >
                        <p style={changeStyle()}>Explore All</p>
                        <RightOutlined
                            style={{
                                fontSize: '1.2rem'
                            }}
                        />
                    </div>
                </div>
            </div>
            <Navigator
                direction={'left'}
                page={page}
                carouselRef={carouselRef}
            />
            <Carousel ref={carouselRef} dotPosition={'top'}>
                {[...Array(page)].map((_, index) => (
                    <CarouselRow
                        key={index}
                        items={data.slice(index * 6, (index + 1) * 6)}
                    />
                ))}
            </Carousel>
            <Navigator
                direction={'right'}
                page={page}
                carouselRef={carouselRef}
            />
        </div>
    )
}

Carousels.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

Carousels.defaultProps = {
    title: 'Match to you',
    data: forYou
}

export default Carousels
