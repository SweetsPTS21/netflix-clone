import React, { useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const Navigator = ({ direction, page, carouselRef }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [navStyle, setNavStyle] = useState({
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bolder',
        transition: 'all 0.2s ease-in-out'
    })

    const next = () => {
        if (currentSlide === page - 1) {
            setCurrentSlide(0)
            carouselRef.current?.goTo(0)
            return
        }
        setCurrentSlide(currentSlide + 1)
        carouselRef.current?.goTo(currentSlide + 1)
    }

    const prev = () => {
        if (currentSlide === 0) {
            setCurrentSlide(page - 1)
            carouselRef.current?.goTo(page - 1)
            return
        }
        setCurrentSlide(currentSlide - 1)
        carouselRef.current?.goTo(currentSlide - 1)
    }

    const switchStyle = () => {
        return direction === 'left'
            ? 'carousel-nav carousel-nav-left'
            : 'carousel-nav carousel-nav-right'
    }

    const onMoveOver = () => {
        setNavStyle({
            ...navStyle,
            transform: 'scale(1.2)'
        })
    }

    const onMoveOut = () => {
        setNavStyle({
            ...navStyle,
            transform: 'scale(1)'
        })
    }

    return (
        <Button
            className={switchStyle()}
            onClick={direction === 'left' ? prev : next}
            onMouseOver={onMoveOver}
            onMouseOut={onMoveOut}
        >
            {direction === 'left' ? (
                <LeftOutlined style={navStyle} />
            ) : (
                <RightOutlined style={navStyle} />
            )}
        </Button>
    )
}

Navigator.propTypes = {
    direction: PropTypes.string,
    page: PropTypes.number,
    carouselRef: PropTypes.object
}

export default Navigator
