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

    return (
        <div
            className={'relative'}
            onMouseOver={() => onMouseOver(episode)}
            onMouseLeave={() => onMouseLeave()}
        >
            <img src={witcher} alt={'movie'} className={'w-full rounded-lg'} />
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
