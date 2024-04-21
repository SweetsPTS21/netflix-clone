import ButtonIcon from '../../../../custom/button/ButtonIcon'
import { Typography } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'

const CardDes = ({ episode }) => {
    return (
        <div className={'flex flex-col px-4 gap-2 text-[#d2d2d2]'}>
            <div className={'flex gap-2 justify-between items-center'}>
                <div className={'flex gap-2'}>
                    <p>{episode?.episode} episode</p>
                    <p>{episode?.duration}</p>
                    <p>{episode?.date}</p>
                </div>
                <ButtonIcon
                    icon={'plus'}
                    tooltip={'Add to My List'}
                    onClick={() => {}}
                />
            </div>
            <Typography.Paragraph
                ellipsis={{
                    rows: 5
                }}
                className={'text-sm text-[#d2d2d2]'}
            >
                {episode?.description}
            </Typography.Paragraph>
        </div>
    )
}

CardDes.propTypes = {
    episode: PropTypes.object
}

export default CardDes
