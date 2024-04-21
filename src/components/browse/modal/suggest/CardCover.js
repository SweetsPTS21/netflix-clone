import witcher from '../../../../assets/img/witcher.jpg'
import ButtonIcon from '../../../../custom/button/ButtonIcon'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CardCover = ({ episode }) => {
    const [showPlayButton, setShowPlayButton] = useState(false)

    const onMouseOver = (episode) => {
        setShowPlayButton(true)
    }

    const onMouseLeave = () => {
        setShowPlayButton(false)
    }

    const image = episode?.images ? episode?.images[0] : witcher

    return (
        <div
            className={'relative h-[157px]'}
            onMouseOver={() => onMouseOver(episode)}
            onMouseLeave={() => onMouseLeave()}
        >
            <img
                src={image}
                alt={'movie'}
                className={'w-full h-full rounded-lg'}
            />
            {showPlayButton && (
                <div className={'absolute top-[26%] left-[40%]'}>
                    <ButtonIcon
                        icon={'play'}
                        onClick={() => {}}
                        style={{
                            width: '3rem',
                            height: '3rem'
                        }}
                    />
                </div>
            )}
        </div>
    )
}

CardCover.propTypes = {
    episode: PropTypes.object
}
export default CardCover
